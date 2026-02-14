import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Find Your Perfect Health Sharing Plan - WhichHealthShare Quiz'
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

        {/* Quiz icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#dbeafe',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontSize: '40px' }}>?</span>
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
          Find Your Perfect
          <br />
          Health Sharing Plan
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
          Take Our Free 60-Second Quiz
        </p>

        {/* CTA button shape */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 48px',
            backgroundColor: '#2563EB',
            borderRadius: '12px',
          }}
        >
          <span
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: 'white',
            }}
          >
            Start Quiz →
          </span>
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
          16 plans compared | Personalized recommendations | No signup required
        </p>
      </div>
    ),
    { ...size }
  )
}
