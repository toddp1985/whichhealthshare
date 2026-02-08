import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  rel?: string
  target?: string
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  rel,
  target
}: CTAButtonProps) {
  const baseClasses = 'btn'
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  )
}
