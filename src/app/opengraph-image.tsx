import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'WhichHealthShare - Compare 16 Health Sharing Plans'
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

        {/* Logo / Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: '#2563EB',
              marginRight: '20px',
            }}
          >
            <span style={{ fontSize: '32px', color: 'white', fontWeight: 700 }}>W</span>
          </div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#64748b',
              letterSpacing: '-0.5px',
            }}
          >
            whichhealthshare.com
          </span>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#1a1a2e',
            textAlign: 'center',
            lineHeight: 1.1,
            margin: '0 0 24px 0',
            letterSpacing: '-2px',
          }}
        >
          WhichHealthShare
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '36px',
            fontWeight: 600,
            color: '#2563EB',
            textAlign: 'center',
            margin: '0 0 20px 0',
          }}
        >
          Compare 16 Health Sharing Plans
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: '24px',
            color: '#64748b',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Independent Reviews | 2026 Pricing
        </p>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            gap: '12px',
          }}
        >
          {['Zion', 'Medi-Share', 'CHM', 'Sedera', 'CrowdHealth', '+11 more'].map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                padding: '8px 16px',
                backgroundColor: '#e0e7ff',
                borderRadius: '20px',
                fontSize: '16px',
                color: '#3730a3',
                fontWeight: 500,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
