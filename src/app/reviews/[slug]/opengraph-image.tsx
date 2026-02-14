import { ImageResponse } from 'next/og'
import { loadMinistry, loadAllMinistries } from '@/lib/data'

export const runtime = 'nodejs'
export const alt = 'WhichHealthShare Review'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  const ministries = loadAllMinistries()
  return ministries.map((m) => ({
    slug: m.slug,
  }))
}

function renderStars(rating: number) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} style={{ color: '#f59e0b', fontSize: '32px' }}>
        ★
      </span>
    )
  }
  if (hasHalf) {
    stars.push(
      <span key="half" style={{ color: '#f59e0b', fontSize: '32px' }}>
        ★
      </span>
    )
  }
  const remaining = 5 - fullStars - (hasHalf ? 1 : 0)
  for (let i = 0; i < remaining; i++) {
    stars.push(
      <span key={`empty-${i}`} style={{ color: '#d1d5db', fontSize: '32px' }}>
        ★
      </span>
    )
  }

  return stars
}

export default async function Image({ params }: { params: { slug: string } }) {
  const ministry = loadMinistry(params.slug)

  if (!ministry) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#f8fafc',
            fontSize: '48px',
            color: '#1a1a2e',
            fontWeight: 700,
          }}
        >
          Review Not Found
        </div>
      ),
      { ...size }
    )
  }

  const minPrice = ministry.plans[0]?.monthlyRange?.individual?.min
  const maxPrice = ministry.plans[0]?.monthlyRange?.individual?.max
  const priceRange = minPrice && maxPrice ? `$${minPrice}-$${maxPrice}/mo` : 'Contact for pricing'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#f8fafc',
          padding: '60px',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #2563EB, #3b82f6, #60a5fa)',
          }}
        />

        {/* Header row with brand */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#2563EB',
                marginRight: '14px',
              }}
            >
              <span style={{ fontSize: '24px', color: 'white', fontWeight: 700 }}>W</span>
            </div>
            <span
              style={{
                fontSize: '22px',
                fontWeight: 600,
                color: '#64748b',
              }}
            >
              whichhealthshare.com
            </span>
          </div>
          <span
            style={{
              fontSize: '18px',
              color: '#94a3b8',
              fontWeight: 500,
            }}
          >
            2026 Review
          </span>
        </div>

        {/* Ministry name */}
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#1a1a2e',
            margin: '0 0 20px 0',
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
          }}
        >
          {ministry.name}
        </h1>

        {/* Stars and rating */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex' }}>{renderStars(ministry.rating)}</div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#1a1a2e',
            }}
          >
            {ministry.rating}/5
          </span>
        </div>

        {/* Info pills */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: '#dbeafe',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#1e40af' }}>
              {priceRange}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: '#e0e7ff',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontSize: '22px', fontWeight: 600, color: '#3730a3' }}>
              {ministry.memberCount} members
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: '#f0fdf4',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontSize: '22px', fontWeight: 600, color: '#166534' }}>
              {ministry.plans[0]?.coverageCap || 'See plans'}
            </span>
          </div>
        </div>

        {/* Best for */}
        <p
          style={{
            fontSize: '24px',
            color: '#475569',
            margin: '0 0 0 0',
            lineHeight: 1.4,
          }}
        >
          Best for: {ministry.bestFor}
        </p>

        {/* Bottom CTA */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '60px',
            right: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#2563EB',
            }}
          >
            Read Full Review →
          </span>
          <span
            style={{
              fontSize: '18px',
              color: '#94a3b8',
            }}
          >
            Independent & unbiased
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
