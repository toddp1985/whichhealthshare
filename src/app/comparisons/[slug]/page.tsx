import { loadAllMinistries } from '@/lib/data'
import Link from 'next/link'
import StarRating from '@/components/common/StarRating'

// Generate static paths for all comparison pages
export async function generateStaticParams() {
  return [
    { slug: 'chm-vs-sedera' },
    { slug: 'zion-vs-medi-share' },
    { slug: 'faith-based-vs-secular-health-sharing' },
    { slug: 'crowdhealth-vs-aca-insurance' },
    { slug: 'health-sharing-vs-presidio-insurance' },
    { slug: 'samaritan-vs-crowdhealth' },
    { slug: 'short-term-vs-long-term-health-sharing' },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const ministries = loadAllMinistries()
  const comparisons: { [key: string]: { title: string; description: string } } = {
    'chm-vs-sedera': {
      title: 'CHM vs Sedera — Health Sharing Comparison 2026',
      description: 'Compare Christian Healthcare Ministries and Sedera: pricing, coverage, member requirements, and which is better for your situation.',
    },
    'zion-vs-medi-share': {
      title: 'Zion vs Medi-Share — Health Sharing Comparison 2026',
      description: 'Direct comparison of Zion Health and Medi-Share: costs, coverage, member experience, and decision framework.',
    },
    'faith-based-vs-secular-health-sharing': {
      title: 'Faith-Based vs Secular Health Sharing Plans 2026',
      description: 'Compare religious and non-religious health sharing options: key differences, requirements, and which fits your values.',
    },
    'crowdhealth-vs-aca-insurance': {
      title: 'CrowdHealth vs ACA Insurance — Comparison 2026',
      description: 'CrowdHealth crowdfunding vs traditional ACA insurance: voluntary contributions, costs, coverage differences.',
    },
    'health-sharing-vs-presidio-insurance': {
      title: 'Health Sharing vs Presidio Insurance — Comparison 2026',
      description: 'Health sharing ministries vs Presidio regulated insurance: guaranteed coverage, pre-existing conditions, costs.',
    },
    'samaritan-vs-crowdhealth': {
      title: 'Samaritan Ministries vs CrowdHealth — Comparison 2026',
      description: 'Compare Samaritan health sharing ministry with CrowdHealth crowdfunding: costs, coverage, member experience.',
    },
    'short-term-vs-long-term-health-sharing': {
      title: 'Short-Term vs Long-Term Health Sharing Options 2026',
      description: 'Temporary vs permanent health sharing solutions: when to use each, trade-offs, and cost comparison.',
    },
  }

  const comparison = comparisons[params.slug]

  return {
    title: comparison?.title || 'Health Sharing Comparison',
    description: comparison?.description || 'Compare health sharing plans and find the right fit.',
  }
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const ministries = loadAllMinistries()

  // Comparison content mapping
  const comparisonContent: { [key: string]: { title: string; intro: string } } = {
    'chm-vs-sedera': {
      title: 'Christian Healthcare Ministries vs Sedera',
      intro: 'Both are established health sharing ministries with strong reputations. CHM is larger with more members; Sedera focuses on simplicity. Both require Christian faith.',
    },
    'zion-vs-medi-share': {
      title: 'Zion Health vs Medi-Share',
      intro: 'Two of the largest health sharing ministries. Zion emphasizes flexibility; Medi-Share has the largest member base. Both non-profit, faith-based.',
    },
    'faith-based-vs-secular-health-sharing': {
      title: 'Faith-Based vs Secular Health Sharing Plans',
      intro: 'Most health sharing ministries require Christian faith commitment. CrowdHealth offers a secular alternative with voluntary community funding.',
    },
    'crowdhealth-vs-aca-insurance': {
      title: 'CrowdHealth vs ACA Insurance',
      intro: 'CrowdHealth is crowdfunding (voluntary contributions). ACA insurance is guaranteed, regulated, covers pre-existing. Different models for different needs.',
    },
    'health-sharing-vs-presidio-insurance': {
      title: 'Health Sharing vs Presidio Insurance',
      intro: 'Health sharing is non-regulated, community-based. Presidio is regulated insurance with guaranteed coverage and pre-existing day-1 coverage.',
    },
    'samaritan-vs-crowdhealth': {
      title: 'Samaritan Ministries vs CrowdHealth',
      intro: 'Samaritan is faith-based health sharing (guaranteed contributions). CrowdHealth is secular crowdfunding (voluntary). Different models, different costs.',
    },
    'short-term-vs-long-term-health-sharing': {
      title: 'Short-Term vs Long-Term Health Sharing',
      intro: 'Short-term health sharing for temporary gaps; long-term ministries for permanent coverage. Choose based on how long you need protection.',
    },
  }

  const content = comparisonContent[params.slug] || {
    title: 'Health Sharing Comparison',
    intro: 'Comparing health sharing options.',
  }

  return (
    <div className="section-narrow pt-8">
      <Link href="/reviews" className="text-blue-700 hover:underline mb-4 inline-block">
        ← Back to all reviews
      </Link>

      <h1 className="font-serif font-bold text-4xl mb-4">{content.title}</h1>

      <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
        <p className="text-lg leading-relaxed">{content.intro}</p>
        <p className="text-sm text-gray-600 mt-4">
          For detailed information about each plan, visit the individual review pages or use our quiz for personalized recommendations.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-serif font-bold text-2xl mb-6">All Plans Reviewed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ministries.slice(0, 4).map((ministry) => (
            <Link
              key={ministry.slug}
              href={`/reviews/${ministry.slug}`}
              className="card hover:shadow-lg transition p-6"
            >
              <h3 className="font-serif font-bold text-lg mb-2">{ministry.name}</h3>
              <StarRating rating={ministry.rating} />
              <p className="text-sm text-gray-600 mt-3 mb-3">
                From ${ministry.plans[0]?.monthlyRange?.individual?.min}/mo
              </p>
              <p className="text-sm font-bold text-blue-700">{ministry.bestFor}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded border border-gray-200">
        <h2 className="font-serif font-bold text-2xl mb-4">Need Help Deciding?</h2>
        <p className="text-gray-700 mb-4">
          Take our quiz to get personalized recommendations based on your age, health status, and budget.
        </p>
        <Link href="/quiz" className="btn btn-primary inline-block">
          Take the Quiz →
        </Link>
      </div>
    </div>
  )
}
