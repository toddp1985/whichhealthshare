/**
 * Internal Linking Audit
 * Analyzes blog posts and recommends cross-links for SEO authority
 */

import fs from 'fs'
import path from 'path'

interface BlogPost {
  slug: string
  filename: string
  title: string
  keywords: string[]
  internalLinks: string[]
  externalLinks: string[]
}

interface LinkRecommendation {
  fromPost: string
  toPost: string
  reason: string
  relevanceScore: number // 0-100
}

const BLOG_DIR = '/Users/tumnus/.openclaw/workspace/whichhealthshare/src/app/blog'

/**
 * Extract frontmatter title from MDX file
 */
function extractTitle(content: string): string {
  const match = content.match(/title:\s*["']([^"']+)["']/)
  return match ? match[1] : 'Untitled'
}

/**
 * Extract keywords from MDX content
 */
function extractKeywords(content: string): string[] {
  const keywords: string[] = []
  
  // From title
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/)
  if (titleMatch) {
    keywords.push(...titleMatch[1].toLowerCase().split(' ').filter(w => w.length > 3))
  }
  
  // From H2 headings
  const headings = content.match(/## (.+)/g) || []
  headings.forEach(h => {
    const text = h.replace('## ', '').toLowerCase()
    keywords.push(...text.split(' ').filter(w => w.length > 3))
  })
  
  return [...new Set(keywords)]
}

/**
 * Extract links from content
 */
function extractLinks(content: string): { internal: string[]; external: string[] } {
  const internal: string[] = []
  const external: string[] = []
  
  // Find markdown links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let match
  
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[2]
    if (url.startsWith('/blog/')) {
      const slug = url.replace('/blog/', '').replace(/[#?].*/, '')
      if (slug) internal.push(slug)
    } else if (url.startsWith('http')) {
      external.push(url)
    }
  }
  
  return { internal: [...new Set(internal)], external: [...new Set(external)] }
}

/**
 * Analyze all blog posts
 */
export function analyzeBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))
  const posts: BlogPost[] = []
  
  for (const file of files) {
    const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
    const slug = file.replace('.mdx', '')
    const { internal, external } = extractLinks(content)
    
    posts.push({
      slug,
      filename: file,
      title: extractTitle(content),
      keywords: extractKeywords(content),
      internalLinks: internal,
      externalLinks: external
    })
  }
  
  return posts
}

/**
 * Generate link recommendations
 */
export function generateLinkRecommendations(posts: BlogPost[]): LinkRecommendation[] {
  const recommendations: LinkRecommendation[] = []
  
  for (let i = 0; i < posts.length; i++) {
    const from = posts[i]
    
    for (let j = 0; j < posts.length; j++) {
      if (i === j) continue
      
      const to = posts[j]
      
      // Skip if already linked
      if (from.internalLinks.includes(to.slug)) continue
      
      // Calculate relevance
      const keywordOverlap = from.keywords.filter(k => to.keywords.includes(k)).length
      const relevanceScore = (keywordOverlap / Math.max(from.keywords.length, to.keywords.length)) * 100
      
      if (relevanceScore > 30) {
        const reason = keywordOverlap > 0
          ? `Shares ${keywordOverlap} keywords: ${from.keywords.filter(k => to.keywords.includes(k)).slice(0, 3).join(', ')}`
          : 'Similar topic coverage'
        
        recommendations.push({
          fromPost: from.slug,
          toPost: to.slug,
          reason,
          relevanceScore
        })
      }
    }
  }
  
  return recommendations.sort((a, b) => b.relevanceScore - a.relevanceScore)
}

/**
 * Generate audit report
 */
export function generateAuditReport(posts: BlogPost[], recommendations: LinkRecommendation[]): string {
  const avgLinksPerPost = posts.reduce((sum, p) => sum + p.internalLinks.length, 0) / posts.length
  
  return `
# Internal Linking Audit Report

## Summary
- **Total Posts:** ${posts.length}
- **Avg Internal Links/Post:** ${avgLinksPerPost.toFixed(1)}
- **Link Opportunities:** ${recommendations.length}

## Current State
${posts.map(p => `- ${p.title} (${p.internalLinks.length} internal links)`).join('\n')}

## Top Recommendations (by relevance)
${recommendations.slice(0, 15).map(r => `
### ${r.fromPost} → ${r.toPost}
- **Relevance:** ${r.relevanceScore.toFixed(0)}%
- **Reason:** ${r.reason}
`).join('\n')}

## Strategy
1. Prioritize recommendations with >70% relevance score
2. Aim for 5-7 internal links per post (currently at ${avgLinksPerPost.toFixed(1)})
3. Link to related posts within body text, not just at bottom
4. Use descriptive anchor text for SEO

## Next Steps
- Review top 20 recommendations
- Add 2-3 high-relevance links to each post
- Update bot posts created after this audit
  `.trim()
}
