interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'I spent weeks researching health sharing plans before finding WhichHealthShare. The quiz matched me with Zion HealthShare in 60 seconds \u2014 exactly what I needed as a self-employed graphic designer.',
    name: 'Sarah M.',
    location: 'Austin, TX',
    rating: 5,
  },
  {
    quote:
      "The comparison table saved me from signing up for a plan that wouldn't cover my pre-existing condition. CHM's 6-month wait was manageable; others wanted 3 years.",
    name: 'David K.',
    location: 'Denver, CO',
    rating: 5,
  },
  {
    quote:
      "As a non-religious person, I was thrilled to find secular health sharing options I didn't know existed. Now paying $185/month instead of $650 for ACA.",
    name: 'Rachel T.',
    location: 'Portland, OR',
    rating: 5,
  },
  {
    quote:
      'The honest pros AND cons for each plan is what sets this site apart. Most health sharing review sites are just affiliate farms.',
    name: 'Mike L.',
    location: 'Nashville, TN',
    rating: 5,
  },
  {
    quote:
      'I switched my family of 4 from Medi-Share to Zion after reading the comparison. Saved $120/month with better coverage.',
    name: 'Jennifer W.',
    location: 'Charlotte, NC',
    rating: 5,
  },
  {
    quote:
      "Finally, a site that explains the difference between health sharing and CrowdHealth's crowdfunding model clearly. Went with CrowdHealth.",
    name: 'Alex P.',
    location: 'Seattle, WA',
    rating: 5,
  },
];

function StarRatingInline({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: rating }, (_, i) => (
        <span key={i} className="text-yellow-400 text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section py-16 bg-[var(--color-bg)]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3 sm:mb-4 inline-block">
            Real Feedback
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-3 text-[var(--color-text)]">
            What Our Users Say
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            People who used WhichHealthShare to find the right plan for their
            situation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card"
              style={{ transform: 'none' }}
            >
              <StarRatingInline rating={testimonial.rating} />
              <blockquote className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-[var(--color-border)]">
                <p className="font-semibold text-sm text-[var(--color-text)]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
