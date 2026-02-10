import Link from 'next/link'

const blogPosts = [
  {
    slug: 'switching-insurance-health-sharing-guide',
    title: 'Switching from Insurance to Health Sharing: Step-by-Step Guide',
    excerpt: 'Complete step-by-step guide to switching from ACA, employer, or Medicare to health sharing, with timing strategies and common mistakes to avoid.',
    date: 'Feb 10, 2026',
    readTime: '12 min',
    wordCount: 2486
  },
  {
    slug: 'prescriptions-health-sharing-coverage-gaps',
    title: 'Prescriptions & Health Sharing: Coverage Gaps Nobody Mentions',
    excerpt: 'Health sharing plans have gaps in prescription drug coverage. Pre-existing medications face 6-12 month waiting periods, and specialty drugs are expensive.',
    date: 'Feb 10, 2026',
    readTime: '11 min',
    wordCount: 2442
  },
  {
    slug: 'health-sharing-waiting-periods-explained',
    title: 'Health Sharing Waiting Periods Explained: What Actually Counts?',
    excerpt: 'Waiting periods block coverage for pre-existing conditions for 6-12 months. See what gets blocked, what it costs, and which plans have no waiting periods.',
    date: 'Feb 10, 2026',
    readTime: '10 min',
    wordCount: 2236
  },
  {
    slug: 'family-health-sharing-plans-4-members',
    title: 'Family Health Sharing Plans: Which Works Best for 4+ Member Households?',
    excerpt: 'For families of 4-6+, health sharing costs $500-$900/month vs. ACA at $1,200-$2,000/month. Compare coverage, waiting periods, and real family scenarios.',
    date: 'Feb 10, 2026',
    readTime: '12 min',
    wordCount: 2518
  },
  {
    slug: 'self-employed-health-sharing-tax-strategy',
    title: 'Choosing Health Sharing for Self-Employed: Tax Strategy + Cost Comparison',
    excerpt: 'Self-employed health sharing contributions are tax-deductible. See real scenarios at $50K-$200K income levels, HSA strategies, and cost comparisons.',
    date: 'Feb 10, 2026',
    readTime: '11 min',
    wordCount: 2424
  },
  {
    slug: 'health-sharing-vs-insurance-2026',
    title: 'Health Sharing vs Health Insurance: Which One Actually Saves You Money?',
    excerpt: 'As of February 2026, health sharing averaged $140–$350/month vs. insurance at $250–$800+/month. But which actually saves money? See 5 real-world scenarios with actual costs.',
    date: 'Feb 9, 2026',
    readTime: '12 min',
    wordCount: 2485
  },
  {
    slug: 'hidden-costs-health-sharing-2026',
    title: 'Hidden Costs of Health Sharing Plans Nobody Talks About',
    excerpt: 'Monthly contributions aren\'t the real cost. Factor in waiting periods, coverage caps, claim denials, and fees—the true cost is 2-4x higher than advertised.',
    date: 'Feb 9, 2026',
    readTime: '10 min',
    wordCount: 2310
  },
  {
    slug: 'crowdhealth-vs-health-sharing',
    title: 'CrowdHealth vs Health Sharing Plans: Which Model Works Better?',
    excerpt: 'CrowdHealth is a healthcare crowdfunding platform that averaged $140/month for individuals under 55 and has no per-event coverage caps, while traditional health sharing ministries use pooled monthly contributions and typically cost $115–$405/month.',
    date: 'Feb 8, 2026',
    readTime: '8 min',
    wordCount: 1600
  },
  {
    slug: '2026-health-sharing-what-changed',
    title: '2026 Health Sharing Plans: What Changed and What Didn\'t',
    excerpt: 'Pricing updates, coverage rule changes, and which plans improved or worsened in 2026. Updated January 2026.',
    date: 'Feb 8, 2026',
    readTime: '7 min',
    wordCount: 1400
  },
  {
    slug: 'hidden-cost-health-sharing',
    title: 'The Hidden Cost of Health Sharing Nobody Talks About',
    excerpt: 'Out-of-pocket amounts, claim rejections, coverage gaps, and true annual costs calculated for all 7 plans.',
    date: 'Feb 8, 2026',
    readTime: '6 min',
    wordCount: 1200
  },
  {
    slug: 'compared-15-health-sharing-plans',
    title: 'I Compared 15 Health Sharing Plans So You Don\'t Have To',
    excerpt: 'Analysis of all 15 health sharing plans, identifying the top 3 and ranking the rest by cost, coverage, and restrictions.',
    date: 'Feb 8, 2026',
    readTime: '8 min',
    wordCount: 1500
  },
  {
    slug: 'health-sharing-hsa-tax-strategy',
    title: 'Health Sharing and Your HSA: The 2026 Tax Strategy',
    excerpt: 'Zion + HSA Secure bundle, tax math, and when HSA pairing makes sense for self-employed people.',
    date: 'Feb 8, 2026',
    readTime: '6 min',
    wordCount: 1200
  },
  {
    slug: '5-questions-before-joining',
    title: '5 Questions to Ask Before Joining Any Health Sharing Plan',
    excerpt: 'Pre-existing conditions, faith requirements, claim frequency, emergency savings, and income/subsidies — the critical questions.',
    date: 'Feb 8, 2026',
    readTime: '5 min',
    wordCount: 1000
  },
  {
    slug: 'non-religious-health-sharing-options',
    title: 'Non-Religious Health Sharing: Your 2026 Options',
    excerpt: 'Only 3 secular options: CrowdHealth, Zion, and Sedera. Comparison and decision tree.',
    date: 'Feb 8, 2026',
    readTime: '6 min',
    wordCount: 1300
  },
  {
    slug: 'left-health-insurance-crowdhealth',
    title: 'I Left Health Insurance for CrowdHealth — What Happened',
    excerpt: 'Personal narrative: switching from $385/month ACA to $140/month CrowdHealth, 6-month experience, and lessons learned.',
    date: 'Feb 8, 2026',
    readTime: '8 min',
    wordCount: 1500
  }
]

export const metadata = {
  title: 'Blog — WhichHealthShare',
  description: 'Read our latest articles on health sharing plans, crowdfunding, and insurance alternatives.',
  openGraph: {
    title: 'Blog — WhichHealthShare',
    description: 'Read our latest articles on health sharing plans, crowdfunding, and insurance alternatives.',
    url: 'https://whichhealthshare.com/blog',
    type: 'website'
  }
}

export default function BlogPage() {
  return (
    <div className="section-narrow py-12">
      <h1 className="font-serif font-bold text-5xl mb-4 text-center">Blog</h1>
      <p className="text-lg text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
        Research, analysis, and honest reviews of health sharing plans, crowdfunding alternatives, and insurance options.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card hover:shadow-lg transition block">
            <h2 className="font-serif font-bold text-2xl mb-3 text-blue-600 hover:text-blue-700">
              {post.title}
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)]">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} read</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 card bg-blue-50 text-center">
        <h3 className="font-serif font-bold text-xl mb-2">Not sure which plan is right for you?</h3>
        <p className="text-[var(--color-text-secondary)] mb-4">Take our quick 6-question quiz to get personalized recommendations.</p>
        <Link href="/quiz" className="text-blue-600 hover:text-blue-700 font-bold">
          Start the Quiz →
        </Link>
      </div>
    </div>
  )
}
