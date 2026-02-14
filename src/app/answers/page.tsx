import Link from 'next/link'
import { generateBreadcrumb } from '@/lib/schema'

export const metadata = {
  title: 'Health Sharing Answers — WhichHealthShare',
  description: 'Direct answers to the most common health sharing questions. Pricing, coverage, and plan comparisons updated February 2026.',
}

const answers = [
  { slug: 'what-is-health-sharing', question: 'What is health sharing?', category: 'Basics' },
  { slug: 'how-health-sharing-works', question: 'How does health sharing work?', category: 'Basics' },
  { slug: 'is-health-sharing-insurance', question: 'Is health sharing insurance?', category: 'Basics' },
  { slug: 'best-health-sharing-plan', question: 'What is the best health sharing plan?', category: 'Choosing a Plan' },
  { slug: 'cheapest-plan', question: 'What is the cheapest health sharing plan?', category: 'Choosing a Plan' },
  { slug: 'no-church-requirement', question: 'Which health sharing plans don\'t require church attendance?', category: 'Choosing a Plan' },
  { slug: 'non-religious-plans', question: 'What are non-religious health sharing plans?', category: 'Choosing a Plan' },
  { slug: 'best-for-families', question: 'Which plan is best for families?', category: 'Choosing a Plan' },
  { slug: 'best-for-self-employed', question: 'Which plan is best for self-employed?', category: 'Choosing a Plan' },
  { slug: 'pre-existing-conditions', question: 'Which plans cover pre-existing conditions?', category: 'Coverage' },
  { slug: 'maternity-coverage', question: 'Which plans cover maternity?', category: 'Coverage' },
  { slug: 'prescription-coverage', question: 'Which plans cover prescriptions?', category: 'Coverage' },
  { slug: 'any-doctor', question: 'Can I see any doctor with health sharing?', category: 'Coverage' },
  { slug: 'emergency-room', question: 'How do plans handle ER visits?', category: 'Coverage' },
  { slug: 'vs-insurance', question: 'Health sharing vs health insurance?', category: 'Comparisons' },
  { slug: 'crowdhealth-vs-health-sharing', question: 'CrowdHealth vs health sharing?', category: 'Comparisons' },
  { slug: 'cost', question: 'How much does health sharing cost?', category: 'Money' },
  { slug: 'worth-it', question: 'Is health sharing worth it?', category: 'Money' },
  { slug: 'hsa-compatible', question: 'Can I use an HSA with health sharing?', category: 'Money' },
  { slug: 'what-is-iua', question: 'What is an IUA (Initial Unshareable Amount)?', category: 'Money' },
  { slug: 'medicare', question: 'Can I use health sharing with Medicare?', category: 'Special Situations' },
]

const categories = [...new Set(answers.map(a => a.category))]

export default function AnswersPage() {
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Answers', url: '/answers' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="section-narrow pt-8">
        <h1 className="font-serif font-bold text-4xl mb-4">Health Sharing Questions — Answered</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Direct, factual answers to the most common health sharing questions. No fluff, no sales pitches — just the information you need. All data verified February 2026.
        </p>

        {categories.map(category => (
          <div key={category} className="mb-10">
            <h2 className="font-serif font-bold text-2xl mb-4 text-[var(--color-primary)]">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {answers.filter(a => a.category === category).map(answer => (
                <Link
                  key={answer.slug}
                  href={`/answers/${answer.slug}`}
                  className="card p-5 hover:shadow-lg transition hover:border-[var(--color-primary-light)]"
                >
                  <h3 className="font-serif font-bold text-lg leading-tight">{answer.question}</h3>
                  <span className="text-sm text-[var(--color-primary)] font-semibold mt-2 inline-block">Read answer →</span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-[var(--color-primary-lighter)] p-6 rounded-lg text-center mt-8">
          <p className="text-[var(--color-text)] mb-4">
            Not sure which plan is right for you?
          </p>
          <Link href="/quiz" className="btn btn-primary inline-block">Take Our Free Quiz →</Link>
        </div>
      </div>
    </>
  )
}
