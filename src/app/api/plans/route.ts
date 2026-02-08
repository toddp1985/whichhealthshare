import { loadAllMinistries, getMinstriesByType, getMinstriesByFaith } from '@/lib/data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get('type')
  const faith = searchParams.get('faith')
  const slug = searchParams.get('slug')

  let ministries = loadAllMinistries()

  if (slug) {
    ministries = ministries.filter(m => m.slug === slug)
  } else {
    if (type) {
      ministries = getMinstriesByType(type as any)
    }
    if (faith) {
      ministries = getMinstriesByFaith(faith)
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
