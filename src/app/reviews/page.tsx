import Link from 'next/link'

export const metadata = {
  title: 'Plan Reviews — WhichHealthShare',
  description: 'Read detailed reviews of all 7 health sharing plans and insurance alternatives.',
}

const plans = [
  { slug: 'medi-share', name: 'Medi-Share', rating: 4.5 },
  { slug: 'presidio-healthcare', name: 'Presidio Healthcare', rating: 4.7 },
  { slug: 'crowdhealth', name: 'CrowdHealth', rating: 4.6 },
  { slug: 'zion', name: 'Zion HealthShare', rating: 4.8 },
  { slug: 'chm', name: 'CHM', rating: 4.5 },
  { slug: 'sedera', name: 'Sedera', rating: 4.3 },
  { slug: 'samaritan', name: 'Samaritan Ministries', rating: 4.4 },
]

export default function ReviewsPage() {
  return (
    <div className="section-narrow py-12">
      <h1 className="font-serif font-bold text-5xl mb-4 text-center">Plan Reviews</h1>
      <p className="text-lg text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
        Detailed reviews of all 7 health sharing plans and insurance alternatives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map(plan => (
          <Link
            key={plan.slug}
            href={`/reviews/${plan.slug}`}
            className="card hover:shadow-lg transition p-6"
          >
            <h2 className="font-serif font-bold text-2xl mb-2 text-blue-600 hover:text-blue-700">
              {plan.name}
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              ⭐ {plan.rating}/5 rating
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 card bg-blue-50 text-center">
        <h3 className="font-serif font-bold text-xl mb-2">Not sure which plan is right?</h3>
        <p className="text-[var(--color-text-secondary)] mb-4">Take our quick 6-question quiz to get personalized recommendations.</p>
        <Link href="/quiz" className="text-blue-600 hover:text-blue-700 font-bold">
          Start the Quiz →
        </Link>
      </div>
    </div>
  )
}
