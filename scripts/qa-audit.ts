#!/usr/bin/env npx tsx

/**
 * WhichHealthShare QA Audit
 * Automatically detects broken links, formatting issues, missing content
 */

import fs from 'fs'
import path from 'path'

interface QAIssue {
  type: 'broken-link' | 'truncated-text' | 'formatting' | 'missing-content'
  location: string
  issue: string
  severity: 'high' | 'medium' | 'low'
  fix?: string
}

const issues: QAIssue[] = []

// Check data files
function auditData() {
  console.log('🔍 Auditing data files...')

  const dataFile = path.join(process.cwd(), 'src/data/ministries.json')
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'))

  // Check each ministry
  data.forEach((ministry: any) => {
    // Check website URL is valid
    if (!ministry.website || !ministry.website.startsWith('http')) {
      issues.push({
        type: 'broken-link',
        location: `ministries.json - ${ministry.name}`,
        issue: `Invalid website URL: "${ministry.website}"`,
        severity: 'high',
        fix: `website should be a full HTTP(S) URL`
      })
    }

    // Check description isn't truncated
    if (ministry.description && ministry.description.length < 20) {
      issues.push({
        type: 'truncated-text',
        location: `ministries.json - ${ministry.name} description`,
        issue: `Description suspiciously short: "${ministry.description}"`,
        severity: 'medium'
      })
    }

    // Check description doesn't have weird characters at start
    if (ministry.description && /^[-\d]/.test(ministry.description)) {
      issues.push({
        type: 'formatting',
        location: `ministries.json - ${ministry.name} description`,
        issue: `Description starts with invalid character: "${ministry.description.slice(0, 30)}"`,
        severity: 'high',
        fix: `Remove leading characters, ensure description starts with text`
      })
    }

    // Check price formatting
    if (ministry.plans && ministry.plans[0]) {
      const plan = ministry.plans[0]
      if (plan.monthlyRange?.individual?.min) {
        const minPrice = plan.monthlyRange.individual.min
        if (minPrice <= 0 || minPrice > 1000) {
          issues.push({
            type: 'formatting',
            location: `ministries.json - ${ministry.name} pricing`,
            issue: `Suspicious minimum price: $${minPrice}/mo`,
            severity: 'medium'
          })
        }
      }
    }

    // Check for missing required fields
    const required = ['name', 'slug', 'website', 'rating', 'plans']
    required.forEach(field => {
      if (!ministry[field]) {
        issues.push({
          type: 'missing-content',
          location: `ministries.json - ${ministry.name}`,
          issue: `Missing required field: ${field}`,
          severity: 'high'
        })
      }
    })
  })
}

// Check markdown files for broken links
function auditMarkdown() {
  console.log('🔍 Auditing markdown files...')

  const blogsDir = path.join(process.cwd(), 'src/app/blog')
  if (!fs.existsSync(blogsDir)) return

  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.mdx'))

  files.forEach(file => {
    const content = fs.readFileSync(path.join(blogsDir, file), 'utf-8')

    // Check for broken links
    const linkRegex = /\[(.+?)\]\((.+?)\)/g
    let match
    while ((match = linkRegex.exec(content)) !== null) {
      const [, text, url] = match
      if (url.includes('undefined') || url.includes('null') || url === '') {
        issues.push({
          type: 'broken-link',
          location: `blog/${file}`,
          issue: `Broken link: [${text}](${url})`,
          severity: 'high'
        })
      }
    }

    // Check for incomplete sections
    if (content.includes('[...') || content.includes('PLACEHOLDER')) {
      issues.push({
        type: 'truncated-text',
        location: `blog/${file}`,
        issue: `Content appears incomplete (has placeholder text)`,
        severity: 'medium'
      })
    }
  })
}

// Report issues
function reportIssues() {
  if (issues.length === 0) {
    console.log('\n✅ No QA issues found!')
    return
  }

  console.log(`\n⚠️  Found ${issues.length} QA issues:\n`)

  const byType = {
    high: issues.filter(i => i.severity === 'high'),
    medium: issues.filter(i => i.severity === 'medium'),
    low: issues.filter(i => i.severity === 'low')
  }

  if (byType.high.length > 0) {
    console.log('🔴 CRITICAL:')
    byType.high.forEach(issue => {
      console.log(`  ${issue.location}: ${issue.issue}`)
      if (issue.fix) console.log(`     → Fix: ${issue.fix}`)
    })
  }

  if (byType.medium.length > 0) {
    console.log('\n🟡 MEDIUM:')
    byType.medium.forEach(issue => {
      console.log(`  ${issue.location}: ${issue.issue}`)
      if (issue.fix) console.log(`     → Fix: ${issue.fix}`)
    })
  }

  if (byType.low.length > 0) {
    console.log('\n🟢 LOW:')
    byType.low.forEach(issue => {
      console.log(`  ${issue.location}: ${issue.issue}`)
    })
  }

  // Exit with error if critical issues
  if (byType.high.length > 0) {
    console.log(`\n❌ Build failed: ${byType.high.length} critical issues must be fixed`)
    process.exit(1)
  }
}

// Run audit
console.log('WhichHealthShare QA Audit\n')
auditData()
auditMarkdown()
reportIssues()
