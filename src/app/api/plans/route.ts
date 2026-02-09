import { loadAllMinistries, getMinstriesByType, getMinstriesByFaith } from '@/lib/data'
import { NextRequest, NextResponse } from 'next/server'

// Featured plans (7 total) - explicit whitelist
const FEATURED_SLUGS = [
  'zion-healthshare',
  'medi-share',
  'chm',
  'sedera',
  'samaritan-ministries',
  'crowdhealth',
  'presidio-healthcare'
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get('type')
  const faith = searchParams.get('faith')
  const slug = searchParams.get('slug')

  // Load only featured plans (7 total)
  let ministries = loadAllMinistries()
    .filter(m => FEATURED_SLUGS.includes(m.slug))
    .sort((a, b) => FEATURED_SLUGS.indexOf(a.slug) - FEATURED_SLUGS.indexOf(b.slug))

  if (slug) {
    ministries = ministries.filter(m => m.slug === slug)
  } else {
    if (type) {
      ministries = ministries.filter(m => m.type === type)
    }
    if (faith) {
      ministries = ministries.filter(m => m.faithRequirement === faith || m.faithRequirement === 'any-faith')
    }
  }

  return NextResponse.json(ministries, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
