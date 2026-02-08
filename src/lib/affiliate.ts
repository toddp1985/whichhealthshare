export interface AffiliateLink {
  url: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
}

export function buildAffiliateLink(
  baseUrl: string,
  pageType: string,
  slug: string
): string {
  const params = new URLSearchParams({
    utm_source: 'whichhealthshare',
    utm_medium: pageType,
    utm_campaign: slug
  })
  return `${baseUrl}?${params.toString()}`
}

export function buildMinistryLink(affiliateLink: string, slug: string, pageType: string = 'review'): string {
  return buildAffiliateLink(affiliateLink, pageType, slug)
}

// Special handling for CrowdHealth (referral code)
export function buildCrowdHealthLink(referralCode: string = '', pageType: string = 'review'): string {
  const baseUrl = 'https://www.joincrowdhealth.com'
  if (referralCode) {
    return buildAffiliateLink(`${baseUrl}?ref=${referralCode}`, pageType, 'crowdhealth')
  }
  return buildAffiliateLink(baseUrl, pageType, 'crowdhealth')
}

// Presidio Healthcare link
export function buildPresidioLink(pageType: string = 'review'): string {
  const baseUrl = 'https://www.presidio.com'
  return buildAffiliateLink(baseUrl, pageType, 'presidio-healthcare')
}

// HSA for America (for applicable ministries)
export function buildHSALink(pageType: string = 'review'): string {
  const baseUrl = 'https://www.hsaforamerica.com'
  return buildAffiliateLink(baseUrl, pageType, 'hsa-for-america')
}
