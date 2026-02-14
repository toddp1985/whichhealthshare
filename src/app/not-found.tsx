import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section-narrow pt-16 pb-16 text-center">
      <h1 className="font-serif font-bold text-6xl mb-4 text-[var(--color-accent)]">404</h1>
      <h2 className="font-serif font-bold text-2xl mb-4 text-[var(--color-text)]">Page Not Found</h2>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved. Try one of these instead:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
        <Link href="/quiz" className="btn btn-primary h-12">
          Take the Quiz
        </Link>
        <Link href="/compare" className="btn btn-secondary h-12">
          Compare Plans
        </Link>
        <Link href="/reviews" className="btn btn-secondary h-12">
          Read Reviews
        </Link>
        <Link href="/answers" className="btn btn-secondary h-12">
          Browse Answers
        </Link>
      </div>

      <Link href="/" className="text-[var(--color-accent)] hover:underline">
        ← Back to Homepage
      </Link>
    </div>
  )
}
