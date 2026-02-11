/**
 * Post-Deployment QA Check
 * Runs automatically after Vercel deploy to catch visual/layout issues
 * Alert on: text overflow, broken links, missing images, accessibility issues
 */

import https from 'https'
import { execSync } from 'child_process'

interface PageCheck {
  url: string
  status: number
  hasTextOverflow: boolean
  brokenLinks: string[]
  missingImages: string[]
  a11yIssues: number
  lighthouse: {
    performance: number
    accessibility: number
    seo: number
  }
}

const SITE = 'https://whichhealthshare.com'
const CRITICAL_PAGES = [
  '/',
  '/reviews',
  '/reviews/crowdhealth',
  '/reviews/presidio-healthcare',
  '/reviews/zion',
  '/reviews/medi-share',
  '/compare',
  '/quiz',
  '/blog',
  '/about',
  '/disclosure',
]

async function fetchPage(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = new URL(path, SITE)
    https.get(url, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(data))
    }).on('error', reject)
  })
}

async function checkPage(path: string): Promise<PageCheck> {
  const html = await fetchPage(path)
  const issues: PageCheck = {
    url: path,
    status: 200,
    hasTextOverflow: checkTextOverflow(html),
    brokenLinks: findBrokenLinks(html),
    missingImages: findMissingImages(html),
    a11yIssues: countA11yIssues(html),
    lighthouse: { performance: 0, accessibility: 0, seo: 0 },
  }
  return issues
}

function checkTextOverflow(html: string): boolean {
  // Look for common text overflow patterns
  const overflowPatterns = [
    /<[^>]*style="[^"]*overflow:[^"]*hidden[^"]*"[^>]*>[^<]*<\/[^>]*>/g,
    /truncate.*ellipsis/g,
    /text-ellipsis.*overflow.*hidden/g,
  ]
  return overflowPatterns.some(pattern => pattern.test(html))
}

function findBrokenLinks(html: string): string[] {
  const linkMatches = html.match(/href=["']([^"']+)["']/g) || []
  const links = linkMatches.map(m => m.match(/href=["']([^"']+)["']/)?.[1] || '')
    .filter((link, idx, arr) => arr.indexOf(link) === idx && link.length > 0)
  
  // Return only obviously broken links
  return links.filter(link => {
    if (link.includes('undefined') || link.includes('null')) return true
    if (link.match(/^\[.*\]/)) return true
    return false
  })
}

function findMissingImages(html: string): string[] {
  const imgMatches = html.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/g) || []
  const missing: string[] = []
  
  imgMatches.forEach(img => {
    const src = img.match(/src=["']([^"']+)["']/)?.[1] || ''
    const alt = img.match(/alt=["']([^"']+)["']/)?.[1]
    
    if (!alt) {
      missing.push(`Image missing alt: ${src}`)
    }
    if (!src || src.includes('undefined') || src.includes('null')) {
      missing.push(`Broken image src: ${src}`)
    }
  })
  
  return missing
}

function countA11yIssues(html: string): number {
  let count = 0
  
  // Missing alt text
  count += (html.match(/<img[^>]*(?!alt=)[^>]*>/g) || []).length
  
  // Missing form labels
  count += (html.match(/<input[^>]*(?!id=)[^>]*>/g) || []).length
  
  // Low contrast potential (simplified check)
  // This is a heuristic—real a11y needs pa11y or axe
  
  return count
}

async function runLighthouse(path: string): Promise<{ performance: number; accessibility: number; seo: number }> {
  try {
    const result = execSync(
      `npx lighthouse "${SITE}${path}" --output=json --quiet --chrome-flags="--headless" 2>/dev/null`,
      { encoding: 'utf-8', timeout: 30000 }
    )
    const json = JSON.parse(result)
    return {
      performance: Math.round(json.categories.performance.score * 100),
      accessibility: Math.round(json.categories.accessibility.score * 100),
      seo: Math.round(json.categories.seo.score * 100),
    }
  } catch {
    return { performance: 0, accessibility: 0, seo: 0 }
  }
}

async function sendAlert(message: string) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
  
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram not configured')
    return
  }
  
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })
  } catch (error) {
    console.error('Failed to send Telegram alert:', error)
  }
}

async function main() {
  console.log('🔍 Running post-deployment QA...')
  
  const results: PageCheck[] = []
  const alerts: string[] = []
  
  for (const path of CRITICAL_PAGES) {
    try {
      const check = await checkPage(path)
      results.push(check)
      
      // Lighthouse check (sample pages only to save time)
      if (['/reviews', '/quiz', '/blog'].includes(path)) {
        check.lighthouse = await runLighthouse(path)
      }
      
      // Flag issues
      if (check.hasTextOverflow) {
        alerts.push(`⚠️  TEXT OVERFLOW on ${path}`)
      }
      if (check.brokenLinks.length > 0) {
        alerts.push(`🔗 BROKEN LINKS on ${path}: ${check.brokenLinks.join(', ')}`)
      }
      if (check.missingImages.length > 0) {
        alerts.push(`🖼️  MISSING IMAGES on ${path}: ${check.missingImages.join(', ')}`)
      }
      if (check.a11yIssues > 0) {
        alerts.push(`♿ ACCESSIBILITY ISSUES on ${path}: ${check.a11yIssues} found`)
      }
      if (check.lighthouse.performance < 80) {
        alerts.push(`⚡ PERFORMANCE on ${path}: ${check.lighthouse.performance}%`)
      }
      
      console.log(`✓ ${path}`)
    } catch (error) {
      console.error(`✗ ${path}:`, error)
      alerts.push(`🔴 FAILED TO CHECK ${path}`)
    }
  }
  
  // Send alert if issues found
  if (alerts.length > 0) {
    const message = `<b>⚠️  WhichHealthShare Post-Deploy QA Alerts</b>\n\n${alerts.join('\n')}`
    await sendAlert(message)
    console.log('\n🚨 ALERTS SENT TO TELEGRAM')
  } else {
    console.log('\n✅ All QA checks passed')
    await sendAlert('✅ WhichHealthShare post-deploy QA passed')
  }
  
  console.log(`\nChecked ${results.length} pages`)
}

main().catch(console.error)
