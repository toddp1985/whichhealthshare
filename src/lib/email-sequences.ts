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
  subject: 'Your personalized health sharing matches',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
    </head>
    <body style="margin: 0; padding: 0; background: #f8f8f8;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #f8f8f8;">
        <tr>
          <td align="center" style="padding: 20px 0;">
            <!-- Main container -->
            <table width="600" border="0" cellspacing="0" cellpadding="0" style="background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
              
              <!-- Hero section -->
              <tr>
                <td style="background: linear-gradient(to bottom, #f5f5f5, #fafafa); padding: 48px 40px; text-align: center;">
                  <h1 style="font-family: Georgia, serif; font-size: 32px; font-weight: 400; margin: 0 0 12px 0; color: #1a1a1a; letter-spacing: -0.5px;">Your Results Are Ready</h1>
                  <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 15px; color: #666; margin: 0;">Three personalized health sharing matches, ranked just for you</p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding: 40px 40px;">
                  <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 20px 0;">Hi there,</p>
                  
                  <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 28px 0;">
                    You just answered 8 questions that narrow 40+ plans down to the ones that actually fit <strong>your</strong> situation. Not generic recommendations. Not biased toward commission. Just matches ranked for your age, budget, and health needs.
                  </p>

                  <!-- CTA -->
                  <div style="text-align: center; margin-bottom: 40px;">
                    <a href="https://whichhealthshare.com/quiz" style="display: inline-block; background: #0284c7; color: white; text-decoration: none; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 16px; font-weight: 500; padding: 16px 48px; border-radius: 4px; letter-spacing: 0.2px;">
                      View Your Matches
                    </a>
                  </div>

                  <!-- Key benefits cards -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                    <tr>
                      <td width="50%" style="padding-right: 16px; padding-bottom: 16px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #f9f9f9; border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px;">
                              <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 12px; color: #666; margin: 0 0 8px 0; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">Real Costs</p>
                              <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #333; margin: 0; line-height: 1.5;">Monthly + hidden fees, so you know what you're actually paying</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50%" style="padding-bottom: 16px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #f9f9f9; border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px;">
                              <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 12px; color: #666; margin: 0 0 8px 0; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">Honest Assessment</p>
                              <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #333; margin: 0; line-height: 1.5;">Pros and cons for each plan, not just marketing speak</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td width="50%" style="padding-right: 16px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #f9f9f9; border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px;">
                              <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 12px; color: #666; margin: 0 0 8px 0; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">Ranked for You</p>
                              <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #333; margin: 0; line-height: 1.5;">Top pick based on your answers, not what makes us money</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50%">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #f9f9f9; border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px;">
                              <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 12px; color: #666; margin: 0 0 8px 0; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">Coverage Details</p>
                              <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #333; margin: 0; line-height: 1.5;">Limits, waiting periods, and what you actually get</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Info blocks -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                    <tr>
                      <td style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 16px 20px; border-radius: 0 4px 4px 0; margin-bottom: 12px;">
                        <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #0c3a5e; margin: 0;"><strong>Timing:</strong> Most plans take 2–5 business days to process. If you're losing coverage soon, factor that in.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px 20px; border-radius: 0 4px 4px 0;">
                        <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #15803d; margin: 0;"><strong>Next email:</strong> In 3 days, we'll show real-world scenarios (ER visit, prescriptions) so you see how each plan actually works.</p>
                      </td>
                    </tr>
                  </table>

                  <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.6; color: #666; margin: 0 0 20px 0;">
                    Questions? Reply to this email. We respond personally, usually within a few hours.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: #f8f8f8; padding: 24px 40px; border-top: 1px solid #e5e5e5; text-align: center;">
                  <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px; color: #999; margin: 0 0 8px 0;">WhichHealthShare Team</p>
                  <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 12px; color: #bbb; margin: 0;">
                    © 2026 WhichHealthShare · <a href="https://whichhealthshare.com/privacy" style="color: #0284c7; text-decoration: none;">Privacy</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
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
