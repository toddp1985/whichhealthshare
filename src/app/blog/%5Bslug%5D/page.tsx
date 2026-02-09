import { notFound } from 'next/navigation'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

const blogDir = path.join(process.cwd(), 'src/app/blog')

interface BlogPost {
  slug: string
  title: string
  content: string
}

function getBlogPost(slug: string): BlogPost | null {
  const postDir = path.join(blogDir, slug)
  
  if (!fs.existsSync(postDir)) {
    return null
  }

  const mdxPath = path.join(postDir, 'page.mdx')
  if (!fs.existsSync(mdxPath)) {
    return null
  }

  const content = fs.readFileSync(mdxPath, 'utf-8')
  
  return {
    slug,
    title: extractTitle(slug),
    content
  }
}

function getAllBlogSlugs(): string[] {
  const files = fs.readdirSync(blogDir)
  return files.filter(f => {
    const stat = fs.statSync(path.join(blogDir, f))
    return stat.isDirectory() && !f.startsWith('[') && !f.startsWith('.')
  })
}

function extractTitle(slug: string): string {
  const titleMap: Record<string, string> = {
    'crowdhealth-vs-health-sharing': 'CrowdHealth vs Health Sharing Plans: Which Model Works Better?',
    '2026-health-sharing-what-changed': '2026 Health Sharing Plans: What Changed and What Didn\'t',
    'hidden-cost-health-sharing': 'The Hidden Cost of Health Sharing Nobody Talks About',
    'compared-15-health-sharing-plans': 'I Compared 15 Health Sharing Plans So You Don\'t Have To',
    'health-sharing-hsa-tax-strategy': 'Health Sharing and Your HSA: The 2026 Tax Strategy',
    '5-questions-before-joining': '5 Questions to Ask Before Joining Any Health Sharing Plan',
    'non-religious-health-sharing-options': 'Non-Religious Health Sharing: Your 2026 Options',
    'left-health-insurance-crowdhealth': 'I Left Health Insurance for CrowdHealth — What Happened'
  }
  return titleMap[slug] || slug
}

export function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return { title: 'Not Found' }
  }

  return {
    title: `${post.title} — WhichHealthShare`,
    description: post.title,
    openGraph: {
      title: post.title,
      url: `https://whichhealthshare.com/blog/${post.slug}`,
      type: 'article'
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Parse frontmatter from MDX
  const frontmatterMatch = post.content.match(/^---\n([\s\S]*?)\n---/)
  const content = post.content.replace(/^---\n[\s\S]*?\n---\n?/, '')

  return (
    <>
      <article className="section-narrow py-12 max-w-3xl">
        <header className="mb-8">
          <h1 className="font-serif font-bold text-5xl mb-4">{post.title}</h1>
          <div className="flex gap-4 text-sm text-[var(--color-text-muted)]">
            <span>Feb 2026</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </article>

      <div className="section-narrow py-12 border-t max-w-3xl">
        <div className="card bg-blue-50 p-8 text-center">
          <h3 className="font-serif font-bold text-2xl mb-4">Ready to Choose?</h3>
          <p className="text-[var(--color-text-secondary)] mb-6">Take our quiz to find the health sharing plan that matches your needs.</p>
          <Link href="/quiz" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Start the Quiz →
          </Link>
        </div>
      </div>

      <div className="section-narrow py-8 text-center max-w-3xl">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-bold">
          ← Back to Blog
        </Link>
      </div>
    </>
  )
}
