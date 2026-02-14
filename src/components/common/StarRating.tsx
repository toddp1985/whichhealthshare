interface StarRatingProps {
  rating: number
  maxRating?: number
  showLabel?: boolean
}

export default function StarRating({ rating, maxRating = 5, showLabel = true }: StarRatingProps) {
  // Generate stars array: full (1), half (0.5), or empty (0)
  const stars = Array.from({ length: maxRating }, (_, i) => {
    const starPosition = i + 1
    if (starPosition <= Math.floor(rating)) {
      return 1 // full star
    } else if (starPosition - 0.5 <= rating) {
      return 0.5 // half star
    } else {
      return 0 // empty star
    }
  })

  return (
    <div className="flex items-center gap-2" role="img" aria-label={`${rating} out of ${maxRating} stars`}>
      <div className="flex gap-0.5" aria-hidden="true">
        {stars.map((fill, i) => {
          if (fill === 1) {
            return (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            )
          } else if (fill === 0.5) {
            return (
              <span key={i} className="relative inline-block">
                <span className="text-gray-300">★</span>
                <span className="absolute top-0 left-0 text-yellow-400 overflow-hidden w-1/2">★</span>
              </span>
            )
          } else {
            return (
              <span key={i} className="text-gray-300">
                ★
              </span>
            )
          }
        })}
      </div>
      {showLabel && <span className="font-bold text-[var(--color-text)] text-sm">{rating.toFixed(1)}</span>}
    </div>
  )
}
