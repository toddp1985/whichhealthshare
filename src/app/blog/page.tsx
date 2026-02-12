import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health Sharing & Insurance Blog — WhichHealthShare',
  description: 'In-depth guides, comparisons, and personal stories on health sharing plans, insurance alternatives, and coverage strategies.',
}

const blogPosts = [
  // Comparisons
  {
    category: 'Comparison',
    title: 'Health Sharing vs Health Insurance: Which One Actually Saves You Money?',
    slug: 'health-sharing-vs-insurance',
    excerpt: 'Side-by-side cost comparison including hidden fees, coverage gaps, and real annual costs.',
  },
  {
    category: 'Comparison',
    title: 'Health Sharing vs ACA: Real Cost Comparison 2026',
    slug: 'health-sharing-vs-aca',
    excerpt: 'ACA marketplace plans vs health sharing. Which is cheaper? Which covers more? Complete breakdown.',
  },
  {
    category: 'Comparison',
    title: 'Health Sharing vs Short-Term Insurance: When to Use Each',
    slug: 'health-sharing-vs-short-term-insurance',
    excerpt: 'When temporary coverage makes sense, and when you need longer-term health sharing plans.',
  },
  {
    category: 'Comparison',
    title: 'Health Sharing vs Presidio Insurance: Which Covers More?',
    slug: 'health-sharing-vs-presidio-insurance',
    excerpt: 'Presidio insurance vs health sharing. Pre-existing conditions, waiting periods, and guaranteed coverage.',
  },
  {
    category: 'Comparison',
    title: 'CrowdHealth vs Health Sharing Plans: Which Model Works Better?',
    slug: 'crowdhealth-vs-health-sharing',
    excerpt: 'Healthcare crowdfunding vs traditional health sharing ministries. Cost, coverage, and how they work.',
  },
  {
    category: 'Comparison',
    title: 'CrowdHealth vs ACA Insurance: The Real Cost Comparison',
    slug: 'crowdhealth-vs-aca-insurance',
    excerpt: 'Is crowdfunding cheaper than ACA? Coverage limits, waiting periods, and real costs.',
  },
  {
    category: 'Comparison',
    title: 'Samaritan Ministries vs CrowdHealth: Community vs Crowdfunding',
    slug: 'samaritan-vs-crowdhealth',
    excerpt: 'Traditional health sharing vs modern crowdfunding. Which model suits your needs?',
  },

  // Plan Comparisons
  {
    category: 'Plan Comparison',
    title: 'CHM vs Sedera: Budget vs Secular Health Sharing',
    slug: 'chm-vs-sedera',
    excerpt: 'Christian Healthcare Ministries vs Sedera. Cost, coverage, and faith requirements.',
  },
  {
    category: 'Plan Comparison',
    title: 'Zion HealthShare vs Medi-Share: Which Plan Wins in 2026?',
    slug: 'zion-vs-medi-share',
    excerpt: 'Direct pricing comparison, coverage limits, waiting periods, and member experiences.',
  },

  // Guides
  {
    category: 'Guide',
    title: 'Switching from Insurance to Health Sharing: Step-by-Step Guide',
    slug: 'switching-from-insurance-to-health-sharing',
    excerpt: 'How to transition, timing your switch, coverage gaps to avoid, and application process.',
  },
  {
    category: 'Guide',
    title: 'Non-Religious Health Sharing: Your 2026 Options',
    slug: 'non-religious-health-sharing-options',
    excerpt: 'Secular health sharing plans without faith requirements or lifestyle restrictions.',
  },
  {
    category: 'Guide',
    title: 'Health Sharing and Your HSA: The 2026 Tax Strategy',
    slug: 'health-sharing-hsa-tax-strategy',
    excerpt: 'How to pair health sharing with HSAs for maximum tax benefits.',
  },
  {
    category: 'Guide',
    title: 'Why Health Sharing Plans Have Waiting Periods (And Why It Matters)',
    slug: 'health-sharing-waiting-periods',
    excerpt: 'What waiting periods are, why they exist, and how they affect your coverage timeline.',
  },
  {
    category: 'Guide',
    title: 'State-by-State Health Sharing Regulations (What You Need to Know)',
    slug: 'health-sharing-state-regulations',
    excerpt: 'Which states allow health sharing, which restrict it, and what rules apply to you.',
  },
  {
    category: 'Guide',
    title: 'Prescriptions & Health Sharing: Coverage Gaps Nobody Mentions',
    slug: 'health-sharing-prescriptions',
    excerpt: 'How different plans handle prescription costs, hidden limits, and pharmacy networks.',
  },

  // Industry/Trends
  {
    category: 'Trends',
    title: 'What Changed in Health Sharing in 2026?',
    slug: '2026-health-sharing-what-changed',
    excerpt: 'New regulations, pricing updates, coverage changes, and what it means for you.',
  },
  {
    category: 'Trends',
    title: 'Hidden Costs of Health Sharing Plans Nobody Talks About',
    slug: 'hidden-cost-health-sharing',
    excerpt: 'Out-of-pocket amounts, claim rejections, coverage gaps, and true annual costs.',
  },
  {
    category: 'Trends',
    title: 'The Hidden Cost of Health Sharing Nobody Talks About',
    slug: 'hidden-costs-nobody-talks-about',
    excerpt: 'Fees, claim rejections, and surprise out-of-pocket costs that derail budgets.',
  },

  // Self-Employed / Business
  {
    category: 'Self-Employed',
    title: 'Health Sharing for Small Business Owners: 2-10 Employee Plans',
    slug: 'health-sharing-small-business',
    excerpt: 'Plans for small business owners, solo 401k strategies, and cost-saving options.',
  },
  {
    category: 'Self-Employed',
    title: 'Health Sharing for Freelancers and Self-Employed (2026)',
    slug: 'health-sharing-for-freelancers',
    excerpt: 'Coverage for variable income, no employer requirements, tax-efficient strategies.',
  },
  {
    category: 'Self-Employed',
    title: 'Choosing Health Sharing for Self-Employed: Tax Strategy + Cost Comparison',
    slug: 'health-sharing-self-employed-tax',
    excerpt: 'Tax deductions, 1099 strategies, and cost comparison vs employee insurance.',
  },
  {
    category: 'Self-Employed',
    title: 'Health Sharing for Remote Workers & Contractors',
    slug: 'health-sharing-remote-workers',
    excerpt: 'Coverage options for distributed teams, contractors, and digital nomads.',
  },

  // Family & Special Situations
  {
    category: 'Family',
    title: 'Family Health Sharing Plans: Which Works Best for 4+ Member Households?',
    slug: 'family-health-sharing-plans',
    excerpt: 'Family pricing, coverage for children, maternity, and managing multi-generation costs.',
  },
  {
    category: 'Family',
    title: 'Health Sharing Family Planners: Best Options for Multigenerational Families',
    slug: 'health-sharing-multigenerational-families',
    excerpt: 'Extended family coverage, aging parents, and plans that work for 5+ members.',
  },

  // Specific Situations
  {
    category: 'Chronic Illness',
    title: 'Cost of Health Sharing with Chronic Illness (Realistic 10-Year Breakdown)',
    slug: 'health-sharing-chronic-illness',
    excerpt: 'Real costs for ongoing conditions, pre-existing exclusions, and long-term planning.',
  },
  {
    category: 'Budget',
    title: 'Monthly Budget Under $300? Here\'s What You Can Actually Get',
    slug: 'health-sharing-under-300',
    excerpt: 'Plans under $300/month, what coverage you get, and tradeoffs to understand.',
  },
  {
    category: 'Time Frame',
    title: 'Short-Term vs Long-Term Health Sharing Strategies: Which Timeframe Fits?',
    slug: 'short-term-vs-long-term-strategies',
    excerpt: 'Whether to plan short-term (1-2 years) or long-term (5+ years) health coverage.',
  },
  {
    category: 'Faith',
    title: 'Faith-Based vs Secular Health Sharing: Which Community Fits You?',
    slug: 'faith-based-vs-secular',
    excerpt: 'Religious vs non-religious plans, lifestyle requirements, and community models.',
  },

  // Personal Stories
  {
    category: 'Personal Story',
    title: 'I Left Health Insurance for CrowdHealth — What Happened',
    slug: 'left-insurance-for-crowdhealth',
    excerpt: 'Real experience switching from traditional insurance to crowdfunding model.',
  },
  {
    category: 'Personal Story',
    title: 'I Compared 15 Health Sharing Plans So You Don\'t Have To',
    slug: 'compared-15-plans',
    excerpt: 'Hands-on comparison of the biggest plans, what I learned, and why I chose mine.',
  },
]

export default function BlogIndexPage() {
  const categories = [...new Set(blogPosts.map(p => p.category))].sort()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero */}
      <section className="section-narrow py-16 sm:py-24 text-center">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-4">
          Health Sharing Blog & Guides
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
          Deep dives into health sharing plans, insurance alternatives, cost breakdowns, and real-world strategies.
        </p>
      </section>

      {/* Posts by Category */}
      {categories.map(category => (
        <section key={category} className="section-narrow py-12 border-b border-blue-100">
          <h2 className="font-serif font-bold text-2xl mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.category === category)
              .map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card hover:shadow-lg transition group"
                >
                  <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-blue-600 transition leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <section className="section-narrow py-12 text-center">
        <p className="text-[var(--color-text-secondary)]">
          {blogPosts.length} articles covering everything you need to know about health sharing plans.
        </p>
      </section>
    </div>
  )
}
