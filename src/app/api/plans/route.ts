import fs from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

// FEATURED PLANS (7 total) - Default for homepage/quiz
const FEATURED_PLANS = {
  'zion-healthshare': true,
  'medi-share': true,
  'chm': true,
  'sedera': true,
  'samaritan-ministries': true,
  'crowdhealth': true,
  'presidio-healthcare': true,
}

// ALL PLANS (16 total) - Used by calculator and compare pages
const ALL_PLANS = {
  ...FEATURED_PLANS,
  'hsa-secure': true,
  'jhs-community': true,
  'oneshare-health': true,
  'liberty-healthshare': true,
  'solidarity-healthshare': true,
  'altrua-healthshare': true,
  'netwell': true,
  'impact-health-sharing': true,
  'united-refuah': true,
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type')
    const faith = searchParams.get('faith')
    const slug = searchParams.get('slug')
    const all = searchParams.get('all')

    // Use ALL_PLANS when ?all=true, otherwise FEATURED_PLANS only
    const planList = all === 'true' ? ALL_PLANS : FEATURED_PLANS

    // Load plans directly from filesystem (bypass CDN cache)
    const dirPath = path.join(process.cwd(), 'src', 'data', 'ministries')
    const files = fs.readdirSync(dirPath)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''))
      .filter(planSlug => planList[planSlug as keyof typeof planList])

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
// Force rebuild - Sun Feb  8 21:16:25 CST 2026
