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
  subject: 'Your health sharing matches are ready (ranked for your situation)',
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; color: #1a1a1a;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%); padding: 40px 24px 32px; text-align: center; border-bottom: 1px solid #e5e5e5;">
        <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 8px 0; color: #1a1a1a;">Your Results Are Ready</h1>
        <p style="font-size: 14px; color: #666; margin: 0;">Personalized health sharing matches, ranked for your situation</p>
      </div>

      <!-- Body -->
      <div style="padding: 32px 24px;">
        <p style="font-size: 16px; line-height: 1.7; color: #1a1a1a; margin: 0 0 24px 0;">
          Hi,
        </p>
        
        <p style="font-size: 16px; line-height: 1.7; color: #1a1a1a; margin: 0 0 20px 0;">
          Most people spend 15 minutes comparing health coverage options for a $1,800–$4,800/year decision. You just did something smarter.
        </p>
        
        <p style="font-size: 16px; line-height: 1.7; color: #1a1a1a; margin: 0 0 28px 0;">
          You answered 8 targeted questions that narrow 40+ plans down to <strong>the ones that actually fit your situation</strong>—not generic recommendations, but matches ranked for your age, budget, and health needs.
        </p>

        <!-- Key Points -->
        <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 28px; border-left: 4px solid #0284c7;">
          <p style="font-size: 14px; font-weight: 600; color: #1a1a1a; margin: 0 0 12px 0;">Your Results Include:</p>
          <ul style="font-size: 14px; line-height: 1.8; color: #1a1a1a; margin: 0; padding-left: 20px;">
            <li>Your top 3 matches ranked by fit for you (not by commission)</li>
            <li>Honest pros and cons for each plan</li>
            <li>True total cost, including hidden fees</li>
            <li>Real coverage limits and waiting periods</li>
          </ul>
        </div>

        <!-- CTA Button -->
        <div style="text-align: center; margin-bottom: 32px;">
          <a href="https://whichhealthshare.com/quiz" style="display: inline-block; background: #0284c7; color: #fff; text-decoration: none; font-weight: 600; padding: 14px 32px; border-radius: 6px; font-size: 16px;">
            View Your Personalized Results →
          </a>
        </div>

        <!-- Context -->
        <p style="font-size: 15px; line-height: 1.7; color: #1a1a1a; margin: 0 0 20px 0;">
          <strong>What happens next:</strong> About 70% of people pick a plan within 3 days. The other 30% bookmark and return when their coverage ends. Both work. Your results don't expire.
        </p>
        
        <p style="font-size: 15px; line-height: 1.7; color: #1a1a1a; margin: 0 0 28px 0;">
          <strong>Important timing note:</strong> Most plans take 2–5 business days to approve. If you're losing coverage soon, factor that into your timeline.
        </p>

        <!-- Next Email -->
        <div style="background: #f0fdf4; border-radius: 8px; padding: 16px; margin-bottom: 28px; border-left: 4px solid #16a34a;">
          <p style="font-size: 14px; color: #1a1a1a; margin: 0;"><strong>In 3 days:</strong> We'll send real-world scenarios (ER visit, prescriptions, etc.) so you can see how each plan actually works.</p>
        </div>

        <!-- Footer -->
        <p style="font-size: 14px; line-height: 1.6; color: #666; margin: 0 0 16px 0; padding-top: 20px; border-top: 1px solid #e5e5e5;">
          Questions about your matches? Reply here — we respond personally, usually within 2–3 hours.
        </p>
        
        <p style="font-size: 14px; color: #666; margin: 0;">
          — WhichHealthShare Team
        </p>
      </div>

      <!-- Footer -->
      <div style="background: #fafafa; padding: 16px 24px; border-top: 1px solid #e5e5e5; text-align: center;">
        <p style="font-size: 12px; color: #999; margin: 0;">
          © 2026 WhichHealthShare. <a href="https://whichhealthshare.com/privacy" style="color: #0284c7; text-decoration: none;">Privacy Policy</a>
        </p>
      </div>
    </div>
  `
})

// Email 2: Real-World Scenarios (Day 3)
const email2Template = (email: string) => ({
  subject: 'What happens when you actually use health sharing (3 real scenarios)',
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; color: #1a1a1a;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">What Happens When You Actually Use Health Sharing</h1>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Hi,
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        You've seen the monthly costs. Now here's what actually matters: how each type of plan handles real medical situations.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        Most people choose based on the monthly price. Then they're surprised when they file their first claim and discover the plan they picked doesn't work the way they expected.
      </p>
      
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 16px;">SCENARIO 1: Emergency Room Visit ($5,000 bill)</p>
      
      <p style="font-size: 14px; line-height: 1.8; margin-bottom: 16px;">
        <strong>Traditional Health Sharing (Medi-Share, Sedera, Liberty):</strong><br>
        • You pay: Annual unshared amount (similar to deductible)<br>
        • Plan covers: Remaining amount (typically 100%)<br>
        • Your cost: Predictable, set in advance<br>
        • Timing: 30-90 days for reimbursement
      </p>
      
      <p style="font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
        <strong>CrowdHealth (Crowdfunding Model):</strong><br>
        • You pay: First $500 out of pocket<br>
        • Community funding: Requested from members (voluntary)<br>
        • Advisory fee: 30-43% of the funded amount<br>
        • Your cost: Lower if healthy year, variable if claims happen<br><br>
        <strong>Example total:</strong><br>
        • Traditional: $2,640/year (fixed monthly) + $0-1,000 unshared = $2,640-3,640<br>
        • CrowdHealth: $1,680/year (fixed monthly) + $500-2,150 in fees = $2,180-3,830<br><br>
        <em>Neither is "better" — depends on whether you value cost certainty or lowest monthly payment.</em>
      </p>
      
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 16px;">SCENARIO 2: Ongoing Prescriptions ($400/month)</p>
      
      <p style="font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
        <strong>Traditional Health Sharing:</strong> Some plans cover after unshared amount. Predictable monthly cost. Better for ongoing medical needs.<br><br>
        <strong>CrowdHealth:</strong> Each prescription is a separate need. Advisory fees add up fast on recurring costs. Can become expensive quickly.<br><br>
        <strong>Best fit:</strong> If you have ongoing prescriptions, traditional health sharing typically makes more sense. The monthly cost is higher, but total annual cost is lower.
      </p>
      
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 16px;">SCENARIO 3: Completely Healthy Year (No Claims)</p>
      
      <p style="font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
        <strong>Traditional Health Sharing:</strong> You pay $2,200-3,200/year (depending on plan). That's it — cost doesn't change.<br><br>
        <strong>CrowdHealth:</strong> You pay $1,680/year. Saved: $520-1,520 vs traditional plans.<br><br>
        <strong>Best fit:</strong> If you're young, healthy, and rarely need medical care, lower monthly cost plans save you money.
      </p>
      
      <div style="background: #f3e8ff; border-left: 4px solid #a855f7; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 14px; margin: 0; font-weight: 600;">THE PATTERN YOU SHOULD NOTICE</p>
        <p style="font-size: 14px; margin: 8px 0 0 0;">There's no "best plan" — only the best plan for your situation.</p>
      </div>
      
      <ul style="font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
        <li>You need cost certainty? → Traditional health sharing (Medi-Share, Sedera, Liberty)</li>
        <li>You're healthy and minimizing monthly cost? → CrowdHealth or lower-tier traditional plans</li>
        <li>You have ongoing medical needs? → Traditional health sharing with prescription coverage</li>
        <li>You want guaranteed coverage by law? → ACA insurance (Presidio, marketplace plans)</li>
      </ul>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>YOUR NEXT STEP</strong><br>
        Your quiz results already factored in your health status, age, and budget to recommend the structure that fits your situation. Haven't reviewed them yet?
      </p>
      
      <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 14px; margin: 0;">
          <a href="https://whichhealthshare.com/quiz" style="color: #0284c7; text-decoration: none; font-weight: 600;">View Your Personalized Results →</a>
        </p>
      </div>
      
      <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
        Want to see all plans side-by-side with real numbers? <a href="https://whichhealthshare.com/compare" style="color: #0284c7; text-decoration: none;">See Full Comparison Table →</a>
      </p>
      
      <p style="font-size: 14px; color: #666; margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
        Reply with questions — we'll walk through your specific situation and help you understand which structure makes sense for you (not which plan we think you should buy).
      </p>
      
      <p style="font-size: 14px; color: #666;">
        — WhichHealthShare Team
      </p>
      
      <p style="font-size: 12px; color: #999; margin-top: 16px;">
        P.S. Most people overthink this decision. Your quiz results are about 80% accurate for your situation. The cost difference between a "good" choice and a "perfect" choice is usually less than $40/month. Don't let analysis paralysis cost you weeks of uninsured time.
      </p>
    </div>
  `
})

// Email 3: Decision Framework (Day 7)
const email3Template = (email: string) => ({
  subject: "You've done the research. Here's how to decide.",
  html: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">You've Done the Research</h1>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        You've been comparing plans for a week. That's smart — this is a $2,000-4,000/year decision that deserves thought.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        But here's what we've noticed: <strong>The more research people do, the more confused they get.</strong> Every plan has pros, cons, Reddit horror stories, and glowing reviews. There's no perfect plan. There's only the right plan for your situation right now.
      </p>
      
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 16px;">THE 3-QUESTION DECISION FRAMEWORK</p>
      
      <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
        After helping thousands of people compare plans, we've found that 3 questions make the decision clear:
      </p>
      
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">QUESTION 1: Do you need cost certainty or cost minimization?</p>
      <ul style="font-size: 14px; line-height: 1.8; margin-bottom: 20px; margin-left: 16px;">
        <li>Certainty (same cost every month, even with claims) → Traditional health sharing</li>
        <li>Minimization (lowest monthly payment, accept claim-time variability) → CrowdHealth or lower-tier plans</li>
      </ul>
      
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">QUESTION 2: Do you have ongoing medical needs?</p>
      <ul style="font-size: 14px; line-height: 1.8; margin-bottom: 20px; margin-left: 16px;">
        <li>Yes (prescriptions, specialists, chronic conditions) → Traditional health sharing with prescription coverage</li>
        <li>No (healthy, preventive care only) → Any plan structure works, pick based on budget</li>
      </ul>
      
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">QUESTION 3: Do you need guaranteed coverage by law?</p>
      <ul style="font-size: 14px; line-height: 1.8; margin-bottom: 24px; margin-left: 16px;">
        <li>Yes (pre-existing conditions, legal protections) → ACA marketplace insurance</li>
        <li>No (comfortable with health sharing model) → Health sharing plans work</li>
      </ul>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>Answer those 3 questions and your decision is basically made.</strong>
      </p>
      
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 16px;">STILL STUCK? HERE'S WHY</p>
      
      <p style="font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
        Most people aren't stuck because they need more information. They're stuck because:
      </p>
      
      <ol style="font-size: 14px; line-height: 1.8; margin-bottom: 24px; margin-left: 16px;">
        <li><strong>They're afraid of making the wrong choice</strong> → Remember: Most plans have 30-day cancellation periods. Try it and adjust if it doesn't fit.</li>
        <li><strong>They're comparing $20/month differences</strong> → Over-analyzing $20-40 monthly differences usually isn't worth another week of research time.</li>
        <li><strong>They're reading too many horror stories</strong> → Every plan has complaints online. Unhappy people post; happy people don't. That's selection bias.</li>
      </ol>
      
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        <strong>YOUR NEXT MOVE</strong><br>
        Your quiz results already accounted for your age, health status, and budget. They're ranking plans in order of fit for you specifically — not for the average person.
      </p>
      
      <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 14px; margin: 0;">
          <a href="https://whichhealthshare.com/quiz" style="color: #0284c7; text-decoration: none; font-weight: 600;">Review Your Results →</a>
        </p>
      </div>
      
      <p style="font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        The top recommendation is there for a reason: It's the plan that fits your situation based on the answers you gave. <strong>Most people's decision is already made — they just haven't committed to it yet.</strong>
      </p>
      
      <p style="font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        If you're truly stuck between two options, reply to this email with:
      </p>
      
      <ul style="font-size: 14px; line-height: 1.8; margin-bottom: 24px; margin-left: 16px;">
        <li>The two plans you're comparing</li>
        <li>Why you're torn between them</li>
        <li>Your biggest concern</li>
      </ul>
      
      <p style="font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        We'll break down which one makes more sense for your specific situation (based on your needs, not which plan pays us more).
      </p>
      
      <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 14px; margin: 0;"><strong>ONE LAST THING</strong><br>
        Health sharing enrollment takes 2-5 business days to process. If you're losing coverage soon or have a medical appointment coming up, don't wait until the last minute.</p>
      </div>
      
      <p style="font-size: 14px; color: #666; margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
        Ready to decide? <a href="https://whichhealthshare.com/quiz" style="color: #0284c7; text-decoration: none; font-weight: 600;">See Your Top Matches →</a>
      </p>
      
      <p style="font-size: 14px; color: #666;">
        — WhichHealthShare Team
      </p>
      
      <p style="font-size: 12px; color: #999; margin-top: 16px;">
        P.S. Your quiz results don't expire. If you're not ready to decide this week, bookmark them and come back when your current coverage ends. We'll still be here to answer questions.
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
