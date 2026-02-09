import fs from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

// FEATURED PLANS ONLY (7 total) - HARDCODED WHITELIST
// This is the source of truth for which plans to show
const FEATURED_PLANS = {
  'zion-healthshare': true,
  'medi-share': true,
  'chm': true,
  'sedera': true,
  'samaritan-ministries': true,
  'crowdhealth': true,
  'presidio-healthcare': true
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type')
    const faith = searchParams.get('faith')
    const slug = searchParams.get('slug')

    // Load plans directly from filesystem (bypass cache)
    const dirPath = path.join(process.cwd(), 'src', 'data', 'ministries')
    const files = fs.readdirSync(dirPath)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''))
      .filter(planSlug => FEATURED_PLANS[planSlug as keyof typeof FEATURED_PLANS])

    let ministries = files.map(planSlug => {
      const content = fs.readFileSync(path.join(dirPath, `${planSlug}.json`), 'utf-8')
      return JSON.parse(content)
    })

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
        'Cache-Control': 'public, max-age=0, must-revalidate'
      },
    })
  } catch (error) {
    console.error('Plans API error:', error)
    return NextResponse.json({ error: 'Failed to load plans' }, { status: 500 })
  }
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
