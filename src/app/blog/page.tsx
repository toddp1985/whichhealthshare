import Link from 'next/link'

const blogPosts = [
  {
    slug: 'health-sharing-family-plans-multigenerational',
    title: 'Health Sharing Family Planners: Best Options for Multigenerational Families',
    excerpt: 'Health sharing for families with parents, kids, and grandparents. Coverage limits, cost structure, and best plans for multiple generations and family sizes.',
    date: 'Feb 10, 2026',
    readTime: '12 min',
    wordCount: 2680
  },
  {
    slug: 'health-sharing-state-regulations-guide',
    title: 'State-by-State Health Sharing Regulations (What You Need to Know)',
    excerpt: 'Are health sharing plans legal in your state? State-by-state regulations, disclosure rules, and regulatory changes in 2026. Restrictions by state.',
    date: 'Feb 10, 2026',
    readTime: '12 min',
    wordCount: 2840
  },
  {
    slug: 'health-sharing-annual-assessments-budget-impact',
    title: 'Annual Assessments Explained: Budget Impact & Hidden Costs',
    excerpt: 'What are annual assessments in health sharing? How they impact your budget mid-year, real examples, and how to forecast the true cost of your contribution.',
    date: 'Feb 10, 2026',
    readTime: '10 min',
    wordCount: 2520
  },
  {
    slug: 'health-sharing-vs-short-term-insurance',
    title: 'Health Sharing vs Short-Term Insurance: When to Use Each',
    excerpt: 'When is short-term insurance better? When is health sharing the right choice? Coverage gaps, costs, and actual use cases compared side-by-side.',
    date: 'Feb 10, 2026',
    readTime: '10 min',
    wordCount: 2840
  },
  {
    slug: 'health-sharing-chronic-illness-10-year-cost',
    title: 'Cost of Health Sharing with Chronic Illness (Realistic 10-Year Breakdown)',
    excerpt: 'Real-world 10-year cost analysis for chronic conditions under health sharing. Diabetes, hypertension, asthma: actual numbers and coverage limits compared to insurance.',
    date: 'Feb 10, 2026',
    readTime: '13 min',
    wordCount: 3040
  },
  {
    slug: 'medicare-health-sharing-supplement-strategy',
    title: 'Medicare + Health Sharing: Supplement Strategy 2026',
    excerpt: 'Should you combine Medicare with health sharing? Strategy guide for retirees exploring hybrid coverage models in 2026. Costs, regulations, and real scenarios.',
    date: 'Feb 10, 2026',
    readTime: '12 min',
    wordCount: 2860
  },
  {
    slug: 'health-sharing-remote-workers-contractors-2026',
    title: 'Health Sharing for Remote Workers & Contractors',
    excerpt: 'Why health sharing makes sense for remote workers and contractors. No employer plan? No problem. Compare options and calculate real savings with no employer dependency.',
    date: 'Feb 10, 2026',
    readTime: '11 min',
    wordCount: 2880
  },
  {
    slug: 'pre-existing-conditions-health-sharing-guide',
    title: 'Pre-Existing Conditions Guide: What Counts, What Doesn\'t',
    excerpt: 'Complete guide to how health sharing plans handle pre-existing conditions. Waiting periods, exclusions, exemptions, and what conditions typically qualify.',
    date: 'Feb 10, 2026',
    readTime: '11 min',
    wordCount: 2770
  },
  {
    slug: 'health-sharing-small-business-plans-2026',
    title: 'Health Sharing for Small Business Owners: 2-10 Employee Plans',
    excerpt: 'Affordable health sharing options for small businesses with 2-10 employees. Compare group plans, individual enrollment, and cost advantages in 2026.',
    date: 'Feb 10, 2026',
    readTime: '11 min',
    wordCount: 2930
  },
  {
    slug: 'aca-to-health-sharing-switching-guide',
    title: 'How to Switch from ACA to Health Sharing Without Losing Coverage',
    excerpt: 'Step-by-step guide to transitioning from ACA insurance to health sharing plans. Avoid coverage gaps, understand waiting periods, and time your switch properly for 2026.',
    date: 'Feb 10, 2026',
    readTime: '12 min',
    wordCount: 2810
  },
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
