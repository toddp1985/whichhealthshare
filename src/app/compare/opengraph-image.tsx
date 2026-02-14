import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Compare All 16 Health Sharing Plans - WhichHealthShare'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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

        {/* Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '48px',
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

        {/* Compare icon */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: '#dbeafe',
              border: '2px solid #93c5fd',
            }}
          >
            <span style={{ fontSize: '24px', color: '#2563EB', fontWeight: 700 }}>A</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: '#e0e7ff',
              border: '2px solid #a5b4fc',
            }}
          >
            <span style={{ fontSize: '24px', color: '#4f46e5', fontWeight: 700 }}>vs</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: '#dbeafe',
              border: '2px solid #93c5fd',
            }}
          >
            <span style={{ fontSize: '24px', color: '#2563EB', fontWeight: 700 }}>B</span>
          </div>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 800,
            color: '#1a1a2e',
            textAlign: 'center',
            lineHeight: 1.15,
            margin: '0 0 24px 0',
            letterSpacing: '-2px',
          }}
        >
          Compare All 16
          <br />
          Health Sharing Plans
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '32px',
            fontWeight: 600,
            color: '#2563EB',
            textAlign: 'center',
            margin: '0 0 32px 0',
          }}
        >
          Side-by-Side | 2026 Pricing
        </p>

        {/* Feature pills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
          }}
        >
          {['Monthly Cost', 'Coverage', 'Network', 'Ratings', 'Faith Req.'].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                padding: '10px 20px',
                backgroundColor: '#f0f9ff',
                border: '1px solid #bae6fd',
                borderRadius: '20px',
                fontSize: '18px',
                color: '#0369a1',
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#94a3b8',
          }}
        >
          Verified pricing | Independent reviews | Updated February 2026
        </p>
      </div>
    ),
    { ...size }
  )
}
