/**
 * Email Sequences for WhichHealthShare
 * Handles 3-email nurture sequence: Day 0, Day 3, Day 7
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY
const SENDER_EMAIL = 'hello@whichhealthshare.com'

interface EmailQueueItem {
  email: string
  templateId: 'email1' | 'email2' | 'email3'
  sendTime: Date
  quizResult?: any
}

// Email 1: Welcome + Quiz Results (Send Immediately)
const email1Template = (email: string, quizResult?: any) => ({
  subject: 'Your health plan comparison just got simpler (+ what you need to know)',
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">Your Health Plan Comparison Results</h1>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Hi,
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Thanks for taking our quiz — it's the fastest way to cut through the noise on health sharing vs. insurance.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Here's what most people miss: <strong>the average health plan decision gets 15 minutes of research before a $1,800–$4,800/year commitment.</strong> That's like choosing a car based on color.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Your quiz just gave you a personalized breakdown of what works for your situation.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>Your Results Include:</strong><br>
        • Your 3 best matches (ranked by cost + coverage fit)<br>
        • Why each one works for you (and honest cons)<br>
        • Your true total cost (base fees + hidden expenses)<br>
        • A side-by-side comparison of what you actually get
      </p>
      
      <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 14px; margin: 0;">
          <a href="https://whichhealthshare.com/quiz" style="color: #0284c7; text-decoration: none; font-weight: 600;">View Your Personalized Results →</a>
        </p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        What happens next is up to you. Some people read their results, pick a plan, and sign up the same day. Others dig deeper into reviews first.
      </p>
      
      <p style="font-size: 14px; color: #666; margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
        Questions? Reply to this email — I read every message.
      </p>
      
      <p style="font-size: 14px; color: #666;">
        — WhichHealthShare Team
      </p>
    </div>
  `
})

// Email 2: CrowdHealth vs Health Sharing Comparison (Day 3)
const email2Template = (email: string) => ({
  subject: 'The real difference between CrowdHealth and health sharing (+ which one costs less)',
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">CrowdHealth vs Health Sharing: What Actually Matters</h1>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Hi,
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Noticed you're still comparing options — that's smart. Most people skip this step and regret it.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Here's the one thing that separates CrowdHealth from traditional health sharing, and why it matters more than you think.
      </p>
      
      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 16px; margin: 0; font-weight: 600;">
          CrowdHealth contributions are voluntary. Health sharing contributions are guaranteed.
        </p>
        <p style="font-size: 14px; margin: 8px 0 0 0; color: #78350f;">
          That one sentence explains 90% of the difference.
        </p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        <strong>So which one costs less?</strong>
      </p>
      
      <ul style="font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
        <li><strong>CrowdHealth (no claims):</strong> $140/mo × 12 = $1,680/year</li>
        <li><strong>CrowdHealth (with $5K claim):</strong> $1,680 + $1,500–$2,150 advisory fee = ~$3,200–$3,830</li>
        <li><strong>Medi-Share:</strong> $220/mo × 12 = $2,640/year (guaranteed)</li>
      </ul>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>For a healthy 35-year-old with no claims, CrowdHealth wins ($1,680 vs $2,640).</strong><br>
        For someone filing a moderate claim, Medi-Share often wins (predictable cost, no surprise fees).
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>If you're torn between these two, ask yourself:</strong><br>
        • Do I need certainty? → pick Medi-Share<br>
        • Am I comfortable with voluntary community funding? → pick CrowdHealth<br>
        • Do I want absolute lowest monthly cost? → CrowdHealth (but accept claim-time surprises)
      </p>
      
      <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 14px; margin: 0;">
          <strong>Bonus option:</strong> If you need guaranteed coverage AND lower cost, consider <a href="https://presidio.co" style="color: #16a34a; text-decoration: none;">Presidio Healthcare</a>. It's actual insurance (~$250–$450/month for families), not health sharing. Covers pre-existing conditions day 1, no coverage caps.
        </p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <a href="https://whichhealthshare.com/compare" style="color: #0284c7; text-decoration: none; font-weight: 600;">See the full comparison →</a>
      </p>
      
      <p style="font-size: 14px; color: #666; margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
        Questions? Hit reply. I respond to every email.
      </p>
      
      <p style="font-size: 14px; color: #666;">
        — WhichHealthShare
      </p>
    </div>
  `
})

// Email 3: Final CTA (Day 7)
const email3Template = (email: string) => ({
  subject: 'One last thing before you decide',
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">Time to Decide</h1>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        You've been researching this for a week. I get it — this is an important decision, and jumping in half-committed costs you $150–$400/month.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>But here's the thing: The more research you do, the more questions pop up. There's no perfect plan — there's only the best plan for you.</strong>
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        <strong>Here's the decision framework that actually works:</strong>
      </p>
      
      <ul style="font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
        <li><strong>Cost sensitive?</strong> → CrowdHealth ($140/mo avg, 30–43% advisory fees)</li>
        <li><strong>Pre-existing condition?</strong> → Medi-Share (coverage day 1)</li>
        <li><strong>Non-religious + lower cost?</strong> → Sedera (no coverage caps, secular-friendly)</li>
      </ul>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>That's it.</strong> Most people overthink this. Your decision is already made — you just haven't committed to it yet.
      </p>
      
      <div style="background: #f3e8ff; border-left: 4px solid #a855f7; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 14px; margin: 0;"><strong>Quick reassurance:</strong> Most plans have a 30-day cancellation window. Try it and back out if it's not right. Your quiz results are 80% accurate. The cost difference between a "good" choice and a "perfect" choice is usually <$50/month.</p>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>Ready?</strong><br>
        <a href="https://whichhealthshare.com/quiz" style="color: #0284c7; text-decoration: none; font-weight: 600;">See your personalized results →</a>
      </p>
      
      <p style="font-size: 14px; color: #666; margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
        If you're stuck, hit reply. I'll talk through your specific situation in 2 minutes.
      </p>
      
      <p style="font-size: 14px; color: #666;">
        — WhichHealthShare
      </p>
    </div>
  `
})

/**
 * Send email immediately (Email 1)
 */
export async function sendWelcomeEmail(email: string, quizResult?: any) {
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured')
    return false
  }

  try {
    const template = email1Template(email, quizResult)
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `WhichHealthShare <${SENDER_EMAIL}>`,
        to: email,
        subject: template.subject,
        html: template.html,
      }),
    })

    if (response.ok) {
      console.log(`[Email 1] Welcome email sent to ${email}`)
      return true
    } else {
      const error = await response.text()
      console.error(`[Email 1] Failed to send: ${error}`)
      return false
    }
  } catch (error) {
    console.error('[Email 1] Error:', error)
    return false
  }
}

/**
 * Schedule Email 2 (Day 3)
 * This would typically be called by a cron job or queue system
 */
export async function sendDay3Email(email: string) {
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured')
    return false
  }

  try {
    const template = email2Template(email)
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `WhichHealthShare <${SENDER_EMAIL}>`,
        to: email,
        subject: template.subject,
        html: template.html,
      }),
    })

    if (response.ok) {
      console.log(`[Email 2] Day 3 email sent to ${email}`)
      return true
    } else {
      const error = await response.text()
      console.error(`[Email 2] Failed to send: ${error}`)
      return false
    }
  } catch (error) {
    console.error('[Email 2] Error:', error)
    return false
  }
}

/**
 * Schedule Email 3 (Day 7)
 */
export async function sendDay7Email(email: string) {
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured')
    return false
  }

  try {
    const template = email3Template(email)
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `WhichHealthShare <${SENDER_EMAIL}>`,
        to: email,
        subject: template.subject,
        html: template.html,
      }),
    })

    if (response.ok) {
      console.log(`[Email 3] Day 7 email sent to ${email}`)
      return true
    } else {
      const error = await response.text()
      console.error(`[Email 3] Failed to send: ${error}`)
      return false
    }
  } catch (error) {
    console.error('[Email 3] Error:', error)
    return false
  }
}
