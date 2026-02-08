interface StarRatingProps {
  rating: number
  maxRating?: number
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  const stars = Array.from({ length: maxRating }, (_, i) => i < Math.floor(rating))

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {stars.map((filled, i) => (
          <span key={i} className={filled ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
      <span className="font-bold text-[var(--color-text)]">{rating.toFixed(1)}/5</span>
    </div>
  )
}
