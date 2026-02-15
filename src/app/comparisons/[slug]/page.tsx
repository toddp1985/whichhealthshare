import { loadMinistry, loadAllMinistries, Ministry } from '@/lib/data'
import Link from 'next/link'
import StarRating from '@/components/common/StarRating'
import { generateBreadcrumb, generateFAQSchema } from '@/lib/schema'
import { buildMinistryLink } from '@/lib/affiliate'

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return [
    { slug: 'chm-vs-sedera' },
    { slug: 'zion-vs-medi-share' },
    { slug: 'faith-based-vs-secular-health-sharing' },
    { slug: 'crowdhealth-vs-aca-insurance' },
    { slug: 'health-sharing-vs-presidio-insurance' },
    { slug: 'samaritan-vs-crowdhealth' },
    { slug: 'short-term-vs-long-term-health-sharing' },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const comparisons: { [key: string]: { title: string; description: string } } = {
    'chm-vs-sedera': {
      title: 'CHM vs Sedera — Health Sharing Comparison 2026',
      description:
        'Compare Christian Healthcare Ministries and Sedera: pricing, coverage, member requirements, and which is better for your situation.',
    },
    'zion-vs-medi-share': {
      title: 'Zion vs Medi-Share — Health Sharing Comparison 2026',
      description:
        'Direct comparison of Zion Health and Medi-Share: costs, coverage, member experience, and decision framework.',
    },
    'faith-based-vs-secular-health-sharing': {
      title: 'Faith-Based vs Secular Health Sharing Plans 2026',
      description:
        'Compare religious and non-religious health sharing options: key differences, requirements, and which fits your values.',
    },
    'crowdhealth-vs-aca-insurance': {
      title: 'CrowdHealth vs ACA Insurance — Comparison 2026',
      description:
        'CrowdHealth crowdfunding vs traditional ACA insurance: voluntary contributions, costs, coverage differences.',
    },
    'health-sharing-vs-presidio-insurance': {
      title: 'Health Sharing vs Presidio Insurance — Comparison 2026',
      description:
        'Health sharing ministries vs Presidio regulated insurance: guaranteed coverage, pre-existing conditions, costs.',
    },
    'samaritan-vs-crowdhealth': {
      title: 'Samaritan Ministries vs CrowdHealth — Comparison 2026',
      description:
        'Compare Samaritan health sharing ministry with CrowdHealth crowdfunding: costs, coverage, member experience.',
    },
    'short-term-vs-long-term-health-sharing': {
      title: 'Short-Term vs Long-Term Health Sharing Options 2026',
      description:
        'Temporary vs permanent health sharing solutions: when to use each, trade-offs, and cost comparison.',
    },
  }

  const comparison = comparisons[params.slug]

  return {
    title: comparison?.title || 'Health Sharing Comparison',
    description: comparison?.description || 'Compare health sharing plans and find the right fit.',
    alternates: {
      canonical: `/comparisons/${params.slug}`,
    },
  }
}

// ---------------------------------------------------------------------------
// Helper: coverage badge
// ---------------------------------------------------------------------------

function CoverageBadge({ included }: { included: boolean }) {
  return included ? (
    <span className="text-green-700 font-bold">Yes</span>
  ) : (
    <span className="text-red-600 font-bold">No</span>
  )
}

// ---------------------------------------------------------------------------
// Helper: faith requirement label
// ---------------------------------------------------------------------------

function faithLabel(m: Ministry): string {
  switch (m.faithRequirement) {
    case 'christian-strict':
      return 'Strict Christian'
    case 'christian-light':
      return 'Christian (light)'
    case 'catholic':
      return 'Catholic'
    case 'jewish':
      return 'Jewish'
    case 'secular':
      return 'None (secular)'
    case 'any-faith':
      return 'None (open to all)'
    default:
      return m.faithRequirement
  }
}

// ---------------------------------------------------------------------------
// Comparison data definitions
// ---------------------------------------------------------------------------

interface ComparisonRow {
  label: string
  valueA: string
  valueB: string
}

interface FAQ {
  question: string
  answer: string
}

interface ComparisonData {
  title: string
  intro: string
  slugA: string | null
  slugB: string | null
  nameA: string
  nameB: string
  rows: (a: Ministry | null, b: Ministry | null) => ComparisonRow[]
  bottomLine: string
  bottomLineSections: { heading: string; text: string }[]
  faqs: FAQ[]
}

function buildRows(a: Ministry | null, b: Ministry | null): ComparisonRow[] {
  const planA = a?.plans[0]
  const planB = b?.plans[0]
  return [
    {
      label: 'Monthly Cost (Individual)',
      valueA: planA?.monthlyRange?.individual
        ? `$${planA.monthlyRange.individual.min}-$${planA.monthlyRange.individual.max}`
        : 'N/A',
      valueB: planB?.monthlyRange?.individual
        ? `$${planB.monthlyRange.individual.min}-$${planB.monthlyRange.individual.max}`
        : 'N/A',
    },
    {
      label: 'Initial Unshareable Amount (IUA)',
      valueA: planA?.iua ? planA.iua.map((v) => `$${v.toLocaleString()}`).join(' / ') : 'N/A',
      valueB: planB?.iua ? planB.iua.map((v) => `$${v.toLocaleString()}`).join(' / ') : 'N/A',
    },
    {
      label: 'Coverage Cap',
      valueA: planA?.coverageCap || 'N/A',
      valueB: planB?.coverageCap || 'N/A',
    },
    {
      label: 'Faith Requirement',
      valueA: a ? faithLabel(a) : 'N/A',
      valueB: b ? faithLabel(b) : 'N/A',
    },
    {
      label: 'Pre-Existing Wait',
      valueA: a?.preExisting.waitingPeriod || 'N/A',
      valueB: b?.preExisting.waitingPeriod || 'N/A',
    },
    {
      label: 'Network',
      valueA: a ? (a.network.name || 'Any doctor') : 'N/A',
      valueB: b ? (b.network.name || 'Any doctor') : 'N/A',
    },
    {
      label: 'Prescriptions',
      valueA: planA?.includes.prescriptions ? 'Included' : 'Not included',
      valueB: planB?.includes.prescriptions ? 'Included' : 'Not included',
    },
    {
      label: 'Mental Health',
      valueA: planA?.includes.mentalHealth ? 'Included' : 'Not included',
      valueB: planB?.includes.mentalHealth ? 'Included' : 'Not included',
    },
    {
      label: 'Maternity',
      valueA: planA?.includes.maternity ? 'Included' : 'Not included',
      valueB: planB?.includes.maternity ? 'Included' : 'Not included',
    },
    {
      label: 'Processing Time',
      valueA: a?.processingTime || 'N/A',
      valueB: b?.processingTime || 'N/A',
    },
  ]
}

function getComparisonData(slug: string): ComparisonData | null {
  const map: { [key: string]: ComparisonData } = {
    // -----------------------------------------------------------------------
    // 1. CHM vs Sedera
    // -----------------------------------------------------------------------
    'chm-vs-sedera': {
      title: 'CHM vs Sedera: Full Comparison for 2026',
      intro:
        'Christian Healthcare Ministries (CHM) and Sedera occupy opposite ends of the health sharing spectrum. CHM is the oldest ministry in America, founded in 1981, with 300,000+ members and the lowest monthly cost in the industry starting at $115/month. Sedera launched in 2010 as a secular alternative with broader coverage including prescriptions, telehealth, and mental health, but costs more at $199-$379/month. If you are choosing between these two, the decision comes down to faith requirements, budget, and how much coverage you need beyond the basics.',
      slugA: 'chm',
      slugB: 'sedera',
      nameA: 'CHM',
      nameB: 'Sedera',
      rows: buildRows,
      bottomLine:
        'CHM wins on price; Sedera wins on coverage breadth and accessibility.',
      bottomLineSections: [
        {
          heading: 'Choose CHM if',
          text: 'You are a committed Christian, attend church regularly, want the lowest possible monthly cost ($115/month individual), and can live without prescription drug and telehealth coverage. CHM has the longest track record (43 years) and unlimited sharing cap.',
        },
        {
          heading: 'Choose Sedera if',
          text: 'You want a secular option with no faith requirement, need prescription and mental health coverage, and are willing to pay $199+/month for broader benefits. Sedera covers telehealth, prescriptions, maternity, and mental health at every tier.',
        },
      ],
      faqs: [
        {
          question: 'Does CHM require church attendance?',
          answer:
            'Yes. CHM requires members to sign a strict Christian statement of faith and provide proof of regular church attendance. Sedera has no faith requirement at all.',
        },
        {
          question: 'Does Sedera cover prescriptions?',
          answer:
            'Yes. Sedera includes prescription drug coverage in its plan. CHM does not cover prescriptions, though members can use discount pharmacy programs independently.',
        },
        {
          question: 'Which has a lower monthly cost?',
          answer:
            'CHM starts at $115/month for individuals, making it the most affordable health sharing ministry. Sedera starts at $199/month but includes more coverage categories like telehealth and mental health.',
        },
        {
          question: 'How do pre-existing condition rules compare?',
          answer:
            'Both CHM and Sedera have a 6-month waiting period for pre-existing conditions with 50% sharing in the first 6 months and 100% after. They are identical on this point.',
        },
        {
          question: 'Are either of these actual health insurance?',
          answer:
            'No. Both CHM and Sedera are health sharing programs, not regulated insurance. Neither is guaranteed coverage. Members voluntarily share medical bills. Neither satisfies the ACA individual mandate in states that still enforce it.',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 2. Zion vs Medi-Share
    // -----------------------------------------------------------------------
    'zion-vs-medi-share': {
      title: 'Zion HealthShare vs Medi-Share: Full Comparison for 2026',
      intro:
        'Zion HealthShare and Medi-Share are two of the most popular health sharing options, but they serve different audiences. Zion is modern, open to all faiths, accepts pre-existing conditions from day one with no waiting period, and uses the Cigna PPO network with 950,000+ providers. Medi-Share is the largest ministry with 400,000+ members and 30+ years of history, but requires Christian faith, imposes a 12-month phased pre-existing wait, and caps sharing at $250,000. For most people without strong faith-based preferences, Zion offers significantly better value.',
      slugA: 'zion-healthshare',
      slugB: 'medi-share',
      nameA: 'Zion HealthShare',
      nameB: 'Medi-Share',
      rows: buildRows,
      bottomLine:
        'Zion wins for most people; Medi-Share wins for committed Christians who value a large, established community.',
      bottomLineSections: [
        {
          heading: 'Choose Zion HealthShare if',
          text: 'You want no faith requirement, no pre-existing waiting period, a PPO network with 950,000+ providers, telehealth, prescriptions, and mental health coverage. Zion is also HSA compatible and costs $185-$268/month for individuals with unlimited sharing cap.',
        },
        {
          heading: 'Choose Medi-Share if',
          text: 'You are a committed Christian looking for the largest and most established health sharing community (400,000+ members since 1992). Medi-Share has strong brand recognition and includes telehealth. Be prepared for higher costs ($227-$405/month), a $250,000 sharing cap, 12-month pre-existing wait, and no prescription or mental health coverage.',
        },
      ],
      faqs: [
        {
          question: 'Does Zion require a statement of faith?',
          answer:
            'No. Zion HealthShare is open to all faiths and does not require any religious affiliation, church attendance, or statement of faith. Medi-Share requires a Christian statement of faith.',
        },
        {
          question: 'How do pre-existing conditions differ?',
          answer:
            'Zion has no waiting period for pre-existing conditions, sharing from month one. Medi-Share has a 12-month waiting period with phased sharing: 25% first year, 50% second, 75% third, and 100% from year four onward.',
        },
        {
          question: 'Which has a higher sharing cap?',
          answer:
            'Zion HealthShare has an unlimited sharing cap. Medi-Share caps sharing at $250,000 per incident, which could leave you exposed for major medical events like cancer treatment or extended hospital stays.',
        },
        {
          question: 'Is Zion HealthShare HSA compatible?',
          answer:
            'Yes. Zion HealthShare is HSA compatible, letting you use pre-tax dollars for out-of-pocket costs. Medi-Share is not HSA compatible.',
        },
        {
          question: 'Which is more established?',
          answer:
            'Medi-Share was founded in 1992 and has 400,000+ members, making it the largest health sharing ministry. Zion was founded in 2017 with 50,000+ members. Medi-Share has a longer track record, but Zion has stronger coverage terms.',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 3. Faith-Based vs Secular Health Sharing
    // -----------------------------------------------------------------------
    'faith-based-vs-secular-health-sharing': {
      title: 'Faith-Based vs Secular Health Sharing: Full Comparison for 2026',
      intro:
        'The health sharing industry was built on religious exemptions to the ACA, so most ministries require Christian faith. But secular options now exist for people who want community-based healthcare without religious affiliation. Faith-based ministries like CHM, Medi-Share, and Samaritan require statements of faith and sometimes church attendance. Secular alternatives like CrowdHealth, Sedera, and Zion HealthShare (open to all faiths) have no religious requirements. This comparison breaks down the real differences in cost, coverage, and eligibility.',
      slugA: 'medi-share',
      slugB: 'crowdhealth',
      nameA: 'Faith-Based (Medi-Share)',
      nameB: 'Secular (CrowdHealth)',
      rows: (a, b) => {
        const planA = a?.plans[0]
        const planB = b?.plans[0]
        return [
          {
            label: 'Monthly Cost (Individual)',
            valueA: 'CHM $115+ / Medi-Share $227+ / Samaritan $220+',
            valueB: 'CrowdHealth ~$140 / Sedera $199+ / Zion $185+',
          },
          {
            label: 'Faith Requirement',
            valueA: 'Christian statement of faith required',
            valueB: 'None',
          },
          {
            label: 'Church Attendance',
            valueA: 'CHM & Samaritan: yes / Medi-Share: no',
            valueB: 'Not required',
          },
          {
            label: 'Coverage Cap',
            valueA: 'CHM & Samaritan: unlimited / Medi-Share: $250K',
            valueB: 'CrowdHealth & Sedera & Zion: unlimited',
          },
          {
            label: 'Pre-Existing Wait',
            valueA: 'CHM: 6 mo / Medi-Share: 12 mo / Samaritan: 12 mo',
            valueB: 'CrowdHealth: phased by year / Sedera: 6 mo / Zion: none',
          },
          {
            label: 'Prescriptions',
            valueA: 'CHM: no / Medi-Share: no / Samaritan: no',
            valueB: 'CrowdHealth: yes / Sedera: yes / Zion: yes',
          },
          {
            label: 'Mental Health',
            valueA: 'Generally not covered',
            valueB: 'CrowdHealth: yes / Sedera: yes / Zion: yes',
          },
          {
            label: 'Telehealth',
            valueA: 'Medi-Share: yes / CHM & Samaritan: no',
            valueB: 'CrowdHealth: yes / Sedera: yes / Zion: yes',
          },
          {
            label: 'PPO Network',
            valueA: 'Generally any doctor (no PPO)',
            valueB: 'Zion: Cigna PPO / Others: any doctor',
          },
          {
            label: 'Members',
            valueA: 'Medi-Share: 400K+ / CHM: 300K+ / Samaritan: 230K+',
            valueB: 'CrowdHealth: 17K+ / Sedera: 50K+ / Zion: 50K+',
          },
        ]
      },
      bottomLine:
        'Secular options win on coverage breadth and accessibility; faith-based options win on price and community size.',
      bottomLineSections: [
        {
          heading: 'Choose faith-based if',
          text: 'You are a practicing Christian, value a large community with decades of track record, and want the lowest possible monthly cost (CHM at $115/month). You accept that prescriptions, mental health, and telehealth may not be covered.',
        },
        {
          heading: 'Choose secular if',
          text: 'You want no religious requirements, broader coverage including prescriptions, mental health, and telehealth, and are comfortable paying slightly more. Zion HealthShare at $185/month is the best overall value with no pre-existing waiting period and a PPO network.',
        },
      ],
      faqs: [
        {
          question: 'Can I join a faith-based ministry if I am not Christian?',
          answer:
            'Generally no. CHM and Samaritan require a strict Christian statement of faith and proof of church attendance. Medi-Share requires a Christian statement of faith but not church attendance. If you are not Christian, consider Zion HealthShare (open to all faiths), Sedera (secular), or CrowdHealth (secular crowdfunding).',
        },
        {
          question: 'Are secular health sharing plans more expensive?',
          answer:
            'Not always. CrowdHealth averages about $140/month for healthy individuals under 55. Zion starts at $185/month. These are competitive with faith-based options like Medi-Share ($227+) and Samaritan ($220+). CHM at $115/month is the lowest cost overall but has the most restrictions.',
        },
        {
          question: 'Do secular plans cover more?',
          answer:
            'Yes, generally. CrowdHealth, Sedera, and Zion all cover prescriptions, mental health, and telehealth. Most faith-based ministries (CHM, Medi-Share, Samaritan) do not cover prescriptions or mental health.',
        },
        {
          question: 'Which secular option is best for pre-existing conditions?',
          answer:
            'Zion HealthShare has no waiting period for pre-existing conditions, sharing from month one. CrowdHealth phases in pre-existing coverage over 4 years. Sedera has a 6-month wait. For immediate pre-existing coverage, Zion is the clear winner.',
        },
        {
          question: 'Are health sharing plans regulated?',
          answer:
            'No. Both faith-based and secular health sharing plans are not regulated insurance. They operate under religious or community-based exemptions. Contributions are voluntary, and coverage is not guaranteed by state insurance departments. If you need guaranteed coverage, consider regulated insurance like Presidio Healthcare.',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 4. CrowdHealth vs ACA Insurance
    // -----------------------------------------------------------------------
    'crowdhealth-vs-aca-insurance': {
      title: 'CrowdHealth vs ACA Insurance: Full Comparison for 2026',
      intro:
        'CrowdHealth and ACA (Affordable Care Act) marketplace insurance are fundamentally different models. CrowdHealth is a crowdfunding platform where members voluntarily fund each other\'s medical bills, averaging about $140/month for individuals under 55. ACA insurance is government-regulated, guaranteed-issue coverage with essential health benefits, premium tax credits, and pre-existing condition protections, but typically costs $400-$700/month without subsidies. This comparison helps you understand the trade-offs between lower cost and guaranteed protection.',
      slugA: 'crowdhealth',
      slugB: null,
      nameA: 'CrowdHealth',
      nameB: 'ACA Insurance',
      rows: (a, _b) => {
        const planA = a?.plans[0]
        return [
          {
            label: 'Monthly Cost (Individual)',
            valueA: '~$140/mo (under 55 avg)',
            valueB: '$400-$700/mo (unsubsidized)',
          },
          {
            label: 'IUA / Deductible',
            valueA: '$500 per health event',
            valueB: '$1,600-$9,200 (Silver-Bronze)',
          },
          {
            label: 'Coverage Cap',
            valueA: 'No cap per event',
            valueB: 'No annual or lifetime limits',
          },
          {
            label: 'Faith Requirement',
            valueA: 'None',
            valueB: 'None',
          },
          {
            label: 'Pre-Existing Conditions',
            valueA: 'Phased: Year 1 none, Year 2 $25K, Year 3 $50K, Year 4+ $100K',
            valueB: 'Covered from day one (guaranteed)',
          },
          {
            label: 'Network',
            valueA: 'Any doctor',
            valueB: 'Plan-specific (HMO/PPO/EPO)',
          },
          {
            label: 'Prescriptions',
            valueA: 'Included (crowdfunded)',
            valueB: 'Included (formulary-based)',
          },
          {
            label: 'Mental Health',
            valueA: 'Included (crowdfunded)',
            valueB: 'Required essential benefit',
          },
          {
            label: 'Maternity',
            valueA: 'Included (crowdfunded)',
            valueB: 'Required essential benefit',
          },
          {
            label: 'Guarantee of Payment',
            valueA: 'No -- voluntary crowdfunding',
            valueB: 'Yes -- legally required',
          },
        ]
      },
      bottomLine:
        'CrowdHealth wins on cost and flexibility; ACA insurance wins on guaranteed coverage and pre-existing conditions.',
      bottomLineSections: [
        {
          heading: 'Choose CrowdHealth if',
          text: 'You are generally healthy, under 55, can handle a $500 per-event commitment, want the lowest monthly cost, and are comfortable with voluntary crowdfunding rather than guaranteed insurance. CrowdHealth works well for self-employed individuals and anyone who missed open enrollment. Note: CrowdHealth does not satisfy state insurance mandates in CA, MA, NJ, RI, DC, or VT.',
        },
        {
          heading: 'Choose ACA Insurance if',
          text: 'You have pre-existing conditions that need coverage from day one, qualify for premium tax credits (most individuals under $60,000 income), need guaranteed coverage by law, or live in a state with an individual mandate. ACA insurance is the safest option if you anticipate significant medical needs.',
        },
      ],
      faqs: [
        {
          question: 'Is CrowdHealth real health insurance?',
          answer:
            'No. CrowdHealth is a healthcare crowdfunding platform, not insurance. Members voluntarily contribute to fund each other\'s medical bills. There is no legal guarantee that your bills will be paid. 99% of approved bills have been funded historically, but this is not a contractual guarantee.',
        },
        {
          question: 'Can I use CrowdHealth instead of ACA insurance?',
          answer:
            'You can, but CrowdHealth does not satisfy the individual health insurance mandate in states that enforce it (California, Massachusetts, New Jersey, Rhode Island, Washington DC, Vermont). In those states, you may owe a tax penalty. In all other states, there is no federal penalty for not having ACA insurance.',
        },
        {
          question: 'How does CrowdHealth handle large medical bills?',
          answer:
            'CrowdHealth negotiates medical bills on your behalf (typically reducing them 30-60%) and then submits them to the community for crowdfunding. Members pay a $500 commitment per health event. The remaining balance is funded by the community. There is no per-event cap.',
        },
        {
          question: 'What if I have a pre-existing condition?',
          answer:
            'ACA insurance covers all pre-existing conditions from day one with no waiting period. CrowdHealth does not cover pre-existing conditions in year one, limits them to $25,000 in year two, $50,000 in year three, and $100,000 per year from year four. If you have significant pre-existing conditions, ACA is the safer choice.',
        },
        {
          question: 'Do I qualify for ACA subsidies?',
          answer:
            'Most individuals earning under approximately $60,000/year (or families under ~$125,000) qualify for premium tax credits that reduce ACA premiums. Use healthcare.gov to check your subsidy. With subsidies, ACA insurance can cost $50-$200/month, which may be cheaper than CrowdHealth.',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 5. Health Sharing vs Presidio Insurance
    // -----------------------------------------------------------------------
    'health-sharing-vs-presidio-insurance': {
      title: 'Health Sharing vs Presidio Insurance: Full Comparison for 2026',
      intro:
        'Health sharing ministries and Presidio Healthcare represent two different philosophies. Health sharing is community-based, unregulated, and typically costs $115-$268/month for individuals, but coverage is voluntary and not guaranteed. Presidio is actual regulated health insurance with guaranteed coverage, pre-existing conditions covered from day one, dental and vision included, and a Cigna PPO network with 950,000+ providers. The trade-off is cost: Presidio runs $300-$600/month for individuals. This comparison helps you decide whether savings or certainty matters more.',
      slugA: 'zion-healthshare',
      slugB: 'presidio-healthcare',
      nameA: 'Health Sharing (Zion)',
      nameB: 'Presidio Insurance',
      rows: (a, b) => {
        return [
          {
            label: 'Monthly Cost (Individual)',
            valueA: 'CHM $115+ / Zion $185+ / Medi-Share $227+',
            valueB: '$300-$600',
          },
          {
            label: 'Type',
            valueA: 'Health sharing (not insurance)',
            valueB: 'Regulated health insurance',
          },
          {
            label: 'Coverage Guarantee',
            valueA: 'Voluntary -- not legally guaranteed',
            valueB: 'Legally guaranteed by contract',
          },
          {
            label: 'Coverage Cap',
            valueA: 'CHM & Zion: unlimited / Medi-Share: $250K',
            valueB: 'Unlimited',
          },
          {
            label: 'Pre-Existing Conditions',
            valueA: 'Zion: none / CHM: 6 mo / Medi-Share: 12 mo',
            valueB: 'Covered from day one (guaranteed)',
          },
          {
            label: 'Network',
            valueA: 'Zion: Cigna PPO / Others: any doctor',
            valueB: 'Cigna PPO (950,000+ providers)',
          },
          {
            label: 'Prescriptions',
            valueA: 'Zion & Sedera: yes / CHM & Medi-Share: no',
            valueB: 'Included',
          },
          {
            label: 'Mental Health',
            valueA: 'Zion & Sedera: yes / CHM & Medi-Share: no',
            valueB: 'Included',
          },
          {
            label: 'Dental & Vision',
            valueA: 'Not included',
            valueB: 'Included',
          },
          {
            label: 'HSA Compatible',
            valueA: 'Zion: yes / Most others: no',
            valueB: 'Yes',
          },
        ]
      },
      bottomLine:
        'Health sharing wins on cost; Presidio wins on guaranteed coverage, pre-existing conditions, and comprehensive benefits.',
      bottomLineSections: [
        {
          heading: 'Choose health sharing if',
          text: 'You are generally healthy, comfortable with voluntary (non-guaranteed) sharing, want to save $100-$400/month on premiums, and do not have significant pre-existing conditions. Zion HealthShare at $185/month offers the best balance of price and coverage among health sharing options.',
        },
        {
          heading: 'Choose Presidio if',
          text: 'You need guaranteed coverage, have pre-existing conditions, want dental and vision included, need regulatory protection, or simply want the peace of mind that comes with actual insurance. At $300-$600/month it costs more, but your claims will be paid.',
        },
      ],
      faqs: [
        {
          question: 'Is health sharing the same as insurance?',
          answer:
            'No. Health sharing is a voluntary arrangement where members share medical bills. It is not regulated by state insurance departments, and there is no legal guarantee that your bills will be shared. Presidio is actual regulated insurance with contractual coverage guarantees.',
        },
        {
          question: 'What happens if a health sharing ministry denies my claim?',
          answer:
            'You have no regulatory recourse. Health sharing ministries are not subject to state insurance regulations, so you cannot appeal to your state insurance commissioner. With Presidio or other regulated insurance, you can file complaints with state regulators and have legal protections.',
        },
        {
          question: 'Does Presidio cover pre-existing conditions from day one?',
          answer:
            'Yes. As regulated insurance, Presidio covers all pre-existing conditions from your first day of coverage with no waiting period, no phased sharing, and no exclusions. Most health sharing ministries have waiting periods of 6 to 12 months.',
        },
        {
          question: 'Can I get dental and vision through health sharing?',
          answer:
            'No health sharing ministry includes dental or vision coverage. Presidio\'s FortressPlan includes both dental and vision in addition to medical, mental health, prescriptions, and all other essential health benefits.',
        },
        {
          question: 'Is the cost difference worth it?',
          answer:
            'It depends on your health and risk tolerance. Saving $150-$400/month with health sharing means $1,800-$4,800/year in savings. But one denied claim for a $50,000 surgery could wipe out years of savings. If you are healthy with no pre-existing conditions and high risk tolerance, health sharing may make sense. If you need certainty, Presidio is worth the premium.',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 6. Samaritan vs CrowdHealth
    // -----------------------------------------------------------------------
    'samaritan-vs-crowdhealth': {
      title: 'Samaritan Ministries vs CrowdHealth: Full Comparison for 2026',
      intro:
        'Samaritan Ministries and CrowdHealth both help members pay medical bills, but they operate on completely different models. Samaritan is a traditional Christian health sharing ministry founded in 1994 with 230,000+ members, requiring strict faith commitment and church attendance. CrowdHealth is a secular healthcare crowdfunding platform launched in 2021 with 17,000+ members and no religious requirements. Samaritan uses a guaranteed contribution model where members send checks directly to other members. CrowdHealth uses voluntary crowdfunding with bill negotiation.',
      slugA: 'samaritan-ministries',
      slugB: 'crowdhealth',
      nameA: 'Samaritan Ministries',
      nameB: 'CrowdHealth',
      rows: buildRows,
      bottomLine:
        'CrowdHealth wins on cost, coverage, and accessibility; Samaritan wins on community size, track record, and guaranteed contributions.',
      bottomLineSections: [
        {
          heading: 'Choose Samaritan Ministries if',
          text: 'You are a committed Christian, attend church regularly, want a large established community (230,000+ members, 30+ years), and prefer the guaranteed contribution model where members are assigned to share your specific bills. Samaritan has an unlimited sharing cap and strong member loyalty.',
        },
        {
          heading: 'Choose CrowdHealth if',
          text: 'You want no faith requirement, lower monthly cost (~$140/month vs $220+), prescriptions and mental health coverage, bill negotiation services (30-60% discounts), and month-to-month flexibility. CrowdHealth is newer and smaller but offers broader coverage for less money.',
        },
      ],
      faqs: [
        {
          question: 'How does Samaritan\'s direct sharing model work?',
          answer:
            'Samaritan members send monthly checks (called "shares") directly to other members who have medical needs. When you have a need, Samaritan assigns other members to send their shares to you. This is a guaranteed assignment, not voluntary crowdfunding like CrowdHealth.',
        },
        {
          question: 'Does CrowdHealth guarantee my bills will be paid?',
          answer:
            'No. CrowdHealth is voluntary crowdfunding. While 99% of approved bills have been funded historically, there is no contractual guarantee. Samaritan\'s model assigns specific members to your need, making the contribution more structured, though it is also not insurance.',
        },
        {
          question: 'Which covers prescriptions and mental health?',
          answer:
            'CrowdHealth covers both prescriptions and mental health through its crowdfunding model. Samaritan Ministries does not cover prescriptions or mental health.',
        },
        {
          question: 'Can non-Christians join either program?',
          answer:
            'CrowdHealth has no faith requirement and is open to everyone. Samaritan Ministries requires a strict Christian statement of faith and proof of regular church attendance. Non-Christians cannot join Samaritan.',
        },
        {
          question: 'Which handles pre-existing conditions better?',
          answer:
            'Neither is great. CrowdHealth phases in pre-existing coverage over 4 years (Year 1: none, Year 2: $25K, Year 3: $50K, Year 4+: $100K/year). Samaritan has a 12-month waiting period with 50% sharing in the first year. If pre-existing conditions are your main concern, consider Zion HealthShare (no waiting period) or Presidio Insurance (guaranteed from day one).',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 7. Short-Term vs Long-Term Health Sharing
    // -----------------------------------------------------------------------
    'short-term-vs-long-term-health-sharing': {
      title: 'Short-Term vs Long-Term Health Sharing: Full Comparison for 2026',
      intro:
        'Not everyone needs health sharing for the long haul. If you are between jobs, waiting for employer coverage to start, aging off a parent\'s plan, or just need temporary protection, short-term health sharing can fill the gap. Long-term health sharing is designed as your ongoing primary healthcare solution. The trade-offs involve cost, pre-existing condition handling, coverage depth, and commitment requirements. This comparison helps you pick the right model for your situation.',
      slugA: 'crowdhealth',
      slugB: 'zion-healthshare',
      nameA: 'Short-Term (CrowdHealth)',
      nameB: 'Long-Term (Zion HealthShare)',
      rows: (_a, _b) => {
        return [
          {
            label: 'Monthly Cost (Individual)',
            valueA: 'CrowdHealth ~$140 / Liberty Rise $99',
            valueB: 'Zion $185+ / CHM $115+ / Medi-Share $227+',
          },
          {
            label: 'Commitment Period',
            valueA: 'Month-to-month, cancel anytime',
            valueB: 'Ongoing membership (cancel anytime)',
          },
          {
            label: 'Best For',
            valueA: 'Coverage gaps, between jobs, temporary needs',
            valueB: 'Primary ongoing healthcare solution',
          },
          {
            label: 'Coverage Cap',
            valueA: 'CrowdHealth: no cap / Liberty Rise: $50K/year',
            valueB: 'Zion & CHM: unlimited / Medi-Share: $250K',
          },
          {
            label: 'Pre-Existing Conditions',
            valueA: 'Generally limited or excluded short-term',
            valueB: 'Zion: from day one / CHM: 6 mo / Medi-Share: 12 mo',
          },
          {
            label: 'Prescriptions',
            valueA: 'CrowdHealth: yes / Liberty Rise: no',
            valueB: 'Zion: yes / Sedera: yes / CHM: no',
          },
          {
            label: 'Mental Health',
            valueA: 'CrowdHealth: yes / Liberty Rise: yes',
            valueB: 'Zion: yes / Sedera: yes / CHM: no',
          },
          {
            label: 'Network',
            valueA: 'Any doctor',
            valueB: 'Zion: Cigna PPO / Others: any doctor',
          },
          {
            label: 'Faith Requirement',
            valueA: 'CrowdHealth: none / Liberty: Christian (light)',
            valueB: 'Varies by ministry',
          },
          {
            label: 'Pre-Existing Value Over Time',
            valueA: 'Does not improve (short stays)',
            valueB: 'Improves with longer membership',
          },
        ]
      },
      bottomLine:
        'Short-term options win on flexibility and speed; long-term options win on comprehensive coverage and pre-existing condition handling.',
      bottomLineSections: [
        {
          heading: 'Choose short-term health sharing if',
          text: 'You need coverage for 1-6 months while between jobs, waiting for employer insurance, or bridging a gap. CrowdHealth\'s month-to-month model with no commitment is ideal for this. Liberty HealthShare\'s Rise plan at $99/month is another option for young adults (18-29) needing basic catastrophic coverage.',
        },
        {
          heading: 'Choose long-term health sharing if',
          text: 'You are self-employed, retired early, or choosing health sharing as your primary healthcare solution. Long-term membership lets pre-existing conditions phase in fully, builds your history with the ministry, and gives you access to deeper benefits. Zion HealthShare is the best overall value for long-term members with no pre-existing wait and comprehensive coverage.',
        },
      ],
      faqs: [
        {
          question: 'Can I use CrowdHealth for just a few months?',
          answer:
            'Yes. CrowdHealth operates month-to-month with no long-term commitment. You can join for as few months as you need and cancel anytime. This makes it one of the best options for temporary coverage gaps.',
        },
        {
          question: 'What if I have a pre-existing condition and only need short-term coverage?',
          answer:
            'Short-term health sharing generally does not cover pre-existing conditions or has severe limitations. If you have a pre-existing condition and need short-term coverage, consider ACA marketplace special enrollment (qualifying life event) or Presidio insurance, both of which cover pre-existing conditions from day one.',
        },
        {
          question: 'How long should I stay in health sharing before switching to long-term?',
          answer:
            'Most health sharing plans phase in pre-existing condition coverage over 6-12 months. If you plan to stay longer than 6 months, choosing a long-term plan from the start (like Zion HealthShare) gives you better benefits sooner. If you only need 1-3 months, CrowdHealth is the most flexible option.',
        },
        {
          question: 'Is there a penalty for leaving health sharing early?',
          answer:
            'Most health sharing ministries have no early termination penalty. CrowdHealth, Zion, and most others let you cancel anytime. Some ministries may require 30-day notice. Always check the specific terms before joining.',
        },
        {
          question: 'Should I get short-term health sharing or short-term health insurance?',
          answer:
            'Short-term health insurance is regulated and provides stronger guarantees but typically excludes pre-existing conditions and has annual caps. Short-term health sharing (CrowdHealth) is cheaper and more flexible but is not insurance. For a true safety net during a gap, short-term insurance may be safer. For cost savings and basic protection, CrowdHealth works well for healthy individuals.',
        },
      ],
    },
  }

  return map[slug] || null
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const data = getComparisonData(params.slug)

  if (!data) {
    return (
      <div className="section-narrow pt-8 text-center">
        <h1 className="font-serif font-bold text-4xl mb-4">Comparison Not Found</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          The comparison you are looking for does not exist.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    )
  }

  // Load ministries used in this comparison
  const ministryA = data.slugA ? loadMinistry(data.slugA) : null
  const ministryB = data.slugB ? loadMinistry(data.slugB) : null
  const rows = data.rows(ministryA, ministryB)

  // Build structured data
  const breadcrumb = generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Comparisons', url: '/comparisons' },
    { name: data.title, url: `/comparisons/${params.slug}` },
  ])

  const faqSchema = generateFAQSchema(data.faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="section-narrow pt-8">
        {/* Breadcrumb nav */}
        <nav className="text-sm text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          {' / '}
          <span>Comparisons</span>
          {' / '}
          <span className="text-[var(--color-text)]">{data.nameA} vs {data.nameB}</span>
        </nav>

        {/* Title & Intro */}
        <h1 className="font-serif font-bold text-4xl mb-4">{data.title}</h1>
        <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
          <p className="text-lg leading-relaxed">{data.intro}</p>
        </div>

        {/* Side-by-side ministry cards (if applicable) */}
        {(ministryA || ministryB) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {ministryA && (
              <div className="card p-6">
                <h3 className="font-serif font-bold text-lg mb-2">{ministryA.name}</h3>
                <StarRating rating={ministryA.rating} />
                <p className="text-sm text-[var(--color-text-secondary)] mt-2 mb-1">
                  {ministryA.memberCount} members | Founded {ministryA.founded}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  From ${ministryA.plans[0]?.monthlyRange?.individual?.min}/mo
                </p>
                <p className="text-sm font-bold text-[var(--color-primary)] mb-4">
                  {ministryA.bestFor}
                </p>
                <div className="flex gap-3">
                  <Link
                    href={`/reviews/${ministryA.slug}`}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Read full review
                  </Link>
                  <a
                    href={buildMinistryLink(ministryA.affiliateLink, ministryA.slug, 'comparison')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            )}
            {ministryB && (
              <div className="card p-6">
                <h3 className="font-serif font-bold text-lg mb-2">{ministryB.name}</h3>
                <StarRating rating={ministryB.rating} />
                <p className="text-sm text-[var(--color-text-secondary)] mt-2 mb-1">
                  {ministryB.memberCount} members | Founded {ministryB.founded}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  From ${ministryB.plans[0]?.monthlyRange?.individual?.min}/mo
                </p>
                <p className="text-sm font-bold text-[var(--color-primary)] mb-4">
                  {ministryB.bestFor}
                </p>
                <div className="flex gap-3">
                  <Link
                    href={`/reviews/${ministryB.slug}`}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Read full review
                  </Link>
                  <a
                    href={buildMinistryLink(ministryB.affiliateLink, ministryB.slug, 'comparison')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Comparison Table */}
        <h2 className="font-serif font-bold text-2xl mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left p-3 border border-gray-200 font-serif font-bold w-1/4">
                  Feature
                </th>
                <th className="text-left p-3 border border-gray-200 font-serif font-bold w-[37.5%]">
                  {data.nameA}
                </th>
                <th className="text-left p-3 border border-gray-200 font-serif font-bold w-[37.5%]">
                  {data.nameB}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{row.label}</td>
                  <td className="p-3 border border-gray-200">{row.valueA}</td>
                  <td className="p-3 border border-gray-200">{row.valueB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Line / Winner Section */}
        <div className="mb-10 p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg">
          <h2 className="font-serif font-bold text-2xl mb-3">The Bottom Line</h2>
          <p className="text-lg font-medium mb-6">{data.bottomLine}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.bottomLineSections.map((section, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-blue-200">
                <h3 className="font-serif font-bold text-lg mb-2">{section.heading}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Review page links */}
        <div className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Read the Full Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ministryA && (
              <Link
                href={`/reviews/${ministryA.slug}`}
                className="card hover:shadow-lg transition p-5"
              >
                <h3 className="font-serif font-bold text-lg mb-1">{ministryA.name} Review</h3>
                <StarRating rating={ministryA.rating} />
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                  Pricing, coverage details, pros and cons, and member experience.
                </p>
              </Link>
            )}
            {ministryB && (
              <Link
                href={`/reviews/${ministryB.slug}`}
                className="card hover:shadow-lg transition p-5"
              >
                <h3 className="font-serif font-bold text-lg mb-1">{ministryB.name} Review</h3>
                <StarRating rating={ministryB.rating} />
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                  Pricing, coverage details, pros and cons, and member experience.
                </p>
              </Link>
            )}
            {/* For category comparisons, show additional relevant reviews */}
            {params.slug === 'faith-based-vs-secular-health-sharing' && (
              <>
                <Link href="/reviews/chm" className="card hover:shadow-lg transition p-5">
                  <h3 className="font-serif font-bold text-lg mb-1">CHM Review</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Oldest and most affordable faith-based ministry.
                  </p>
                </Link>
                <Link href="/reviews/samaritan-ministries" className="card hover:shadow-lg transition p-5">
                  <h3 className="font-serif font-bold text-lg mb-1">Samaritan Ministries Review</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Traditional Christian health sharing with direct member-to-member contributions.
                  </p>
                </Link>
                <Link href="/reviews/sedera" className="card hover:shadow-lg transition p-5">
                  <h3 className="font-serif font-bold text-lg mb-1">Sedera Review</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Secular health sharing with prescription and mental health coverage.
                  </p>
                </Link>
                <Link href="/reviews/zion-healthshare" className="card hover:shadow-lg transition p-5">
                  <h3 className="font-serif font-bold text-lg mb-1">Zion HealthShare Review</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Open-to-all-faiths ministry with no pre-existing waiting period.
                  </p>
                </Link>
              </>
            )}
            {params.slug === 'health-sharing-vs-presidio-insurance' && (
              <>
                <Link href="/reviews/chm" className="card hover:shadow-lg transition p-5">
                  <h3 className="font-serif font-bold text-lg mb-1">CHM Review</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Most affordable health sharing ministry at $115/month.
                  </p>
                </Link>
                <Link href="/reviews/medi-share" className="card hover:shadow-lg transition p-5">
                  <h3 className="font-serif font-bold text-lg mb-1">Medi-Share Review</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Largest health sharing ministry with 400,000+ members.
                  </p>
                </Link>
              </>
            )}
            {params.slug === 'short-term-vs-long-term-health-sharing' && (
              <>
                <Link href="/reviews/chm" className="card hover:shadow-lg transition p-5">
                  <h3 className="font-serif font-bold text-lg mb-1">CHM Review</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Lowest cost long-term option at $115/month.
                  </p>
                </Link>
                <Link href="/reviews/medi-share" className="card hover:shadow-lg transition p-5">
                  <h3 className="font-serif font-bold text-lg mb-1">Medi-Share Review</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Established long-term community with 30+ year track record.
                  </p>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-10">
          <h2 className="font-serif font-bold text-2xl mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-lg overflow-hidden"
              >
                <summary className="cursor-pointer p-4 font-medium hover:bg-gray-50 flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <div className="p-4 pt-0 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--color-primary-lighter)] p-6 rounded-lg mb-8 text-center">
          <h2 className="font-serif font-bold text-2xl mb-3">Not Sure Which Plan Is Right for You?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Take our 2-minute quiz to get a personalized recommendation based on your age, health
            status, budget, and coverage needs.
          </p>
          <Link href="/quiz" className="btn btn-primary inline-block">
            Take the Quiz
          </Link>
        </div>
      </div>
    </>
  )
}
