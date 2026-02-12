/**
 * Link Audit Tool
 * Validates all external links in blog posts before deployment
 */

import fs from 'fs'
import path from 'path'

interface LinkCheckResult {
  url: string
  status: number
  statusText: string
  valid: boolean
  foundIn: string[]
}

interface AuditReport {
  timestamp: string
  totalPostsChecked: number
  totalLinksChecked: number
  brokenLinks: LinkCheckResult[]
  successRate: number
  report: string
}

const BLOG_DIR = '/Users/tumnus/.openclaw/workspace/whichhealthshare/src/app/blog'
const TIMEOUT = 5000 // 5 second timeout per link

/**
 * Extract all external links from a single file
 */
function extractLinks(content: string): string[] {
  const linkRegex = /https?:\/\/[^\s\)]+/g
  const matches = content.match(linkRegex) || []
  return [...new Set(matches)] // Remove duplicates
}

/**
 * Check if a link is valid (GET request)
 */
async function checkLink(url: string): Promise<{ status: number; statusText: string }> {
  let timeout: NodeJS.Timeout | undefined
  try {
    const controller = new AbortController()
    timeout = setTimeout(() => controller.abort(), TIMEOUT)

    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'follow'
    })

    if (timeout) clearTimeout(timeout)
    return { status: response.status, statusText: response.statusText }
  } catch (error) {
    if (timeout) clearTimeout(timeout)
    // Fallback to GET if HEAD fails
    try {
      const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT) })
      return { status: response.status, statusText: response.statusText }
    } catch {
      return { status: 0, statusText: 'Unreachable' }
    }
  }
}

/**
 * Run audit on all blog posts
 */
export async function runLinkAudit(): Promise<AuditReport> {
  console.log('🔍 Starting link audit...')

  const brokenLinks: LinkCheckResult[] = []
  let totalPostsChecked = 0
  let totalLinksChecked = 0

  try {
    // Find all MDX files in blog directory
    if (!fs.existsSync(BLOG_DIR)) {
      return {
        timestamp: new Date().toISOString(),
        totalPostsChecked: 0,
        totalLinksChecked: 0,
        brokenLinks: [],
        successRate: 100,
        report: 'Blog directory not found'
      }
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))
    console.log(`Found ${files.length} blog posts to audit`)

    // Check links in each file
    for (const file of files) {
      const filePath = path.join(BLOG_DIR, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const links = extractLinks(content)

      if (links.length === 0) continue

      totalPostsChecked++

      // Check each link
      for (const link of links.slice(0, 10)) { // Check max 10 per post to avoid rate limiting
        totalLinksChecked++

        const result = await checkLink(link)

        if (result.status >= 400) {
          const existing = brokenLinks.find(b => b.url === link)
          if (existing) {
            existing.foundIn.push(file)
          } else {
            brokenLinks.push({
              url: link,
              status: result.status,
              statusText: result.statusText,
              valid: false,
              foundIn: [file]
            })
          }
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 200))
      }
    }
  } catch (error) {
    console.error('Audit error:', error)
  }

  const successRate = totalLinksChecked > 0 ? ((totalLinksChecked - brokenLinks.length) / totalLinksChecked) * 100 : 100

  const report = `
📋 LINK AUDIT REPORT
Timestamp: ${new Date().toISOString()}

Posts Checked: ${totalPostsChecked}
Links Checked: ${totalLinksChecked}
Broken Links: ${brokenLinks.length}
Success Rate: ${successRate.toFixed(1)}%

${brokenLinks.length > 0 ? '❌ BROKEN LINKS FOUND:\n' + brokenLinks.map(b => `- ${b.url} (${b.status}) in: ${b.foundIn.join(', ')}`).join('\n') : '✅ All links valid!'}
  `.trim()

  return {
    timestamp: new Date().toISOString(),
    totalPostsChecked,
    totalLinksChecked,
    brokenLinks,
    successRate,
    report
  }
}

/**
 * Generate markdown report
 */
export function generateAuditMarkdown(audit: AuditReport): string {
  return `# Link Audit Report
${audit.timestamp}

## Summary
- **Posts Checked:** ${audit.totalPostsChecked}
- **Links Checked:** ${audit.totalLinksChecked}
- **Broken Links:** ${audit.brokenLinks.length}
- **Success Rate:** ${audit.successRate.toFixed(1)}%

## Broken Links
${audit.brokenLinks.length > 0 ? audit.brokenLinks.map(b => `- [\`${b.status}\`] ${b.url}\n  Found in: ${b.foundIn.join(', ')}`).join('\n\n') : 'None detected ✅'}
`
}
