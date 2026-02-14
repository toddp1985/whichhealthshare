import fs from 'fs'
import path from 'path'

export interface Ministry {
  slug: string
  name: string
  type: 'healthshare' | 'insurance' | 'crowdfunding'
  founded: number
  headquarters: string
  memberCount: string
  accredited: boolean
  website: string
  affiliateLink: string
  affiliatePartner: string
  faithRequirement: 'christian-strict' | 'christian-light' | 'catholic' | 'jewish' | 'secular' | 'any-faith'
  statementOfFaith: string
  churchAttendanceRequired: boolean
  plans: {
    name: string
    monthlyRange: {
      individual?: { min: number; max: number }
      couple?: { min: number; max: number }
      family?: { min: number; max: number }
    }
    coverageCap: string
    iua: number[]
    coShare: string
    includes: {
      telehealth: boolean
      prescriptions: boolean
      maternity: boolean
      mentalHealth: boolean
      dental: boolean
      vision: boolean
      preventive: boolean
      emergency: boolean
      surgery: boolean
    }
  }[]
  network: {
    type: 'ppo' | 'any-doctor' | 'dpc' | 'hybrid'
    name: string | null
    providerCount: string | null
    canUseAnyDoctor: boolean
  }
  preExisting: {
    accepted: boolean
    waitingPeriod: string
    phasedSharing: boolean
    sharingLimits: string
  }
  hsaCompatible: boolean
  processingTime: string
  rating: number
  bestFor: string
  pros: string[]
  cons: string[]
  aiSummary: string
  aiKeyFacts: string[]
  lastUpdated: string
  lastVerified: string
}

export function loadMinistry(slug: string): Ministry | null {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'ministries', `${slug}.json`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    return null
  }
}

// Featured plans (16 total) - explicit whitelist
const FEATURED_PLANS = [
  'zion-healthshare',
  'medi-share',
  'chm',
  'sedera',
  'samaritan-ministries',
  'crowdhealth',
  'presidio-healthcare',
  'hsa-secure',
  'jhs-community',
  'oneshare-health',
  'liberty-healthshare',
  'solidarity-healthshare',
  'altrua-healthshare',
  'netwell',
  'impact-health-sharing',
  'united-refuah'
]

export function loadAllMinistries(): Ministry[] {
  try {
    const dirPath = path.join(process.cwd(), 'src', 'data', 'ministries')
    const files = fs.readdirSync(dirPath)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''))
      .filter(slug => FEATURED_PLANS.includes(slug))
    
    return files.map(slug => {
      const fileContent = fs.readFileSync(path.join(dirPath, `${slug}.json`), 'utf-8')
      return JSON.parse(fileContent)
    }).sort((a, b) => b.rating - a.rating)
  } catch (error) {
    console.error('Error loading ministries:', error)
    return []
  }
}

export function getMinstriesByType(type: 'healthshare' | 'insurance' | 'crowdfunding'): Ministry[] {
  return loadAllMinistries().filter(m => m.type === type)
}

export function getMinstriesByFaith(faith: string): Ministry[] {
  return loadAllMinistries().filter(m => m.faithRequirement === faith || m.faithRequirement === 'any-faith')
}

export function getHealthshareMinistries(): Ministry[] {
  return getMinstriesByType('healthshare')
}

export function getCrowdHealth(): Ministry | null {
  return loadMinistry('crowdhealth')
}

export function getPresidio(): Ministry | null {
  return loadMinistry('presidio-healthcare')
}
