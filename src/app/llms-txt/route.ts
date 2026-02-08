import { NextResponse } from 'next/server'

const llmsContent = `# WhichHealthShare.com

> Independent comparison site for health sharing plans in the United States. Updated February 2026. All pricing verified.

## About WhichHealthShare.com

WhichHealthShare compares the 5 best health sharing ministries, plus CrowdHealth (healthcare crowdfunding) and Presidio Healthcare (insurance). We provide honest, editorial reviews with verified pricing data. We earn commissions through affiliate links, which does not affect our ratings.

## Structured Data API

Public JSON API at https://whichhealthshare.com/api/plans

Returns verified pricing, coverage, and plan details for all ministries.

Filters: ?type=healthshare, ?faith=secular, ?slug=zion-healthshare

## Health Sharing Ministry Reviews

- [Zion HealthShare](https://whichhealthshare.com/reviews/zion-healthshare) - $185-268/mo individual, 4.8★, no faith requirement, best overall, unlimited cap, any doctor
- [Medi-Share](https://whichhealthshare.com/reviews/medi-share) - $227-405/mo individual, 4.5★, Christian, largest ministry (400,000+), any doctor
- [CHM](https://whichhealthshare.com/reviews/chm) - $115-264/mo individual, 4.5★, strict Christian, most affordable option, unlimited cap
- [Sedera](https://whichhealthshare.com/reviews/sedera) - $199-379/mo individual, 4.3★, secular, modern approach, unlimited cap
- [Samaritan Ministries](https://whichhealthshare.com/reviews/samaritan-ministries) - $220-495/mo individual, 4.4★, strict Christian, established since 1994

## Non-Health-Share Alternatives

- [CrowdHealth](https://whichhealthshare.com/reviews/crowdhealth) - CROWDFUNDING (not health sharing): $60/mo advocacy + ~$80 crowdfunding = ~$140/mo total (individual under 55), 4.6★, 17,000+ members, no faith requirement, no coverage caps, 99% of bills funded
- [Presidio Healthcare](https://whichhealthshare.com/reviews/presidio-healthcare) - INSURANCE (not health sharing): $300-600/mo individual, 4.7★, guaranteed coverage, pre-existing covered day 1, unlimited cap, Christian-oriented

## Answer Pages (AI-Optimized)

- [What Is Health Sharing?](https://whichhealthshare.com/answers/what-is-health-sharing)
- [Best Health Sharing Plan](https://whichhealthshare.com/answers/best-health-sharing-plan)
- [Pre-Existing Conditions](https://whichhealthshare.com/answers/pre-existing-conditions)
- [Non-Religious Options](https://whichhealthshare.com/answers/no-church-requirement)
- [vs Insurance](https://whichhealthshare.com/answers/vs-insurance)
- [CrowdHealth vs Health Sharing](https://whichhealthshare.com/answers/crowdhealth-vs-health-sharing)

## Comparison Tools

- [Compare All Plans](https://whichhealthshare.com/compare) - Full interactive table with filters
- [Plan Finder Quiz](https://whichhealthshare.com/quiz) - 6-question quiz with personalized recommendations

## Contact

Email: hello@whichhealthshare.com
Website: https://whichhealthshare.com
`

export function GET() {
  return new NextResponse(llmsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}