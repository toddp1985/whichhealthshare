import { NextResponse } from 'next/server'

const llmsContent = `# WhichHealthShare.com

> Independent comparison site for health sharing plans in the United States. Updated February 2026. All pricing verified.

## About WhichHealthShare.com

WhichHealthShare compares 15+ health sharing organizations, plus CrowdHealth (healthcare crowdfunding) and Presidio Healthcare (insurance). We provide honest, editorial reviews with verified pricing data. We earn commissions through affiliate links, which does not affect our ratings.

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
- [Impact Health Sharing](https://whichhealthshare.com/reviews/impact-health-sharing) - $180-320/mo individual, 4.2★, secular, wellness rewards
- [OneShare Health](https://whichhealthshare.com/reviews/oneshare-health) - $200-380/mo individual, 4.3★, Christian-light, modern interface
- [Liberty HealthShare](https://whichhealthshare.com/reviews/liberty-healthshare) - $185-420/mo individual, 4.3★, Christian-light, established 2005
- [Solidarity HealthShare](https://whichhealthshare.com/reviews/solidarity-healthshare) - $210-390/mo individual, 4.3★, Catholic-focused
- [Altrua HealthShare](https://whichhealthshare.com/reviews/altrua-healthshare) - $195-370/mo individual, 4.2★, Christian-light, established 2009
- [United Refuah](https://whichhealthshare.com/reviews/united-refuah) - $220-400/mo individual, 4.2★, Jewish faith focus
- [Trinity HealthShare](https://whichhealthshare.com/reviews/trinity-healthshare) - $205-385/mo individual, 4.3★, Christian-light, flexible approach
- [netWell HealthShare](https://whichhealthshare.com/reviews/netwell-healthshare) - $189-359/mo individual, 4.2★, secular, modern approach
- [HSA Secure](https://whichhealthshare.com/reviews/hsa-secure) - $195-365/mo individual, 4.3★, secular, HSA compatible, self-employed friendly
- [JHS Community](https://whichhealthshare.com/reviews/jhs-community) - $140-260/mo individual, 3.9★, secular, catastrophic coverage, lowest cost

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