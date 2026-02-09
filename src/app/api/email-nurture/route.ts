import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const resend = new Resend(process.env.RESEND_API_KEY)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

interface EmailSignup {
  id: string
  email: string
  created_at: string
  last_email_sent?: string
  last_email_type?: string
}

/**
 * Daily cron job to send nurture emails
 * Day 0: Welcome + plan overview
 * Day 3: Presidio/CrowdHealth comparison
 * Day 7: Final CTA
 */
export async function POST(request: Request) {
  try {
    // Get all email signups that haven't received today's email yet
    const { data: signups, error: fetchError } = await supabase
      .from('email_signups')
      .select('*')
      .order('created_at', { ascending: true })

    if (fetchError) {
      return Response.json({ error: fetchError.message }, { status: 500 })
    }

    if (!signups || signups.length === 0) {
      return Response.json({ sent: 0, message: 'No signups to email' })
    }

    const now = new Date()
    let emailsSent = 0

    for (const signup of signups as EmailSignup[]) {
      const createdAt = new Date(signup.created_at)
      const daysSinceSignup = Math.floor(
        (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
      )

      let emailType = ''
      let subject = ''
      let htmlContent = ''

      // Day 0: Welcome email
      if (daysSinceSignup === 0 && signup.last_email_type !== 'welcome') {
        emailType = 'welcome'
        subject = 'Your Health Sharing Plan Results Are Ready'
        htmlContent = generateWelcomeEmail(signup.email)
      }

      // Day 3: Comparison email
      if (daysSinceSignup === 3 && signup.last_email_type !== 'comparison') {
        emailType = 'comparison'
        subject = 'Presidio vs CrowdHealth: Which Is Right for You?'
        htmlContent = generateComparisonEmail(signup.email)
      }

      // Day 7: Final CTA email
      if (daysSinceSignup === 7 && signup.last_email_type !== 'final') {
        emailType = 'final'
        subject = 'Make Your Decision: Health Sharing Plans Close Soon'
        htmlContent = generateFinalEmail(signup.email)
      }

      // Send email if needed
      if (emailType) {
        try {
          await resend.emails.send({
            from: 'WhichHealthShare <hello@whichhealthshare.com>',
            to: signup.email,
            subject,
            html: htmlContent,
          })

          // Update record
          await supabase
            .from('email_signups')
            .update({
              last_email_sent: new Date().toISOString(),
              last_email_type: emailType,
            })
            .eq('id', signup.id)

          emailsSent++
        } catch (emailError) {
          console.error(`Failed to send ${emailType} email to ${signup.email}:`, emailError)
        }
      }
    }

    return Response.json({
      sent: emailsSent,
      message: `Sent ${emailsSent} email(s)`,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Email nurture job failed:', error)
    return Response.json(
      { error: 'Email nurture job failed' },
      { status: 500 }
    )
  }
}

function generateWelcomeEmail(email: string): string {
  return `
    <html>
      <body style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Your Health Sharing Plan Results Are Ready</h2>
        <p>Hi there,</p>
        <p>Thank you for taking our health sharing comparison quiz. We matched you with plans based on your specific needs.</p>
        
        <h3>Your Top Recommendation</h3>
        <p>Visit your personalized results to see all 7 plans ranked for you.</p>
        
        <a href="https://whichhealthshare.com/quiz" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block;">View Your Results</a>
        
        <h3>What's Next?</h3>
        <p>In our next email (day 3), we'll compare your top two options side-by-side so you can make an informed decision.</p>
        
        <p>Questions? Reply to this email or visit our <a href="https://whichhealthshare.com/compare">comparison page</a>.</p>
        
        <p>Best,<br>WhichHealthShare Team</p>
      </body>
    </html>
  `
}

function generateComparisonEmail(email: string): string {
  return `
    <html>
      <body style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Presidio vs CrowdHealth: Which Is Right for You?</h2>
        <p>Hi there,</p>
        <p>You're narrowing it down! Here's how your top two options compare:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f3f4f6;">
            <th style="border: 1px solid #e5e7eb; padding: 12px;">Feature</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px;">Presidio</th>
            <th style="border: 1px solid #e5e7eb; padding: 12px;">CrowdHealth</th>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Monthly Cost</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">$250-450</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">~$140</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Pre-existing Coverage</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Day 1</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Day 1</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Type</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Insurance</td>
            <td style="border: 1px solid #e5e7eb; padding: 12px;">Crowdfunding</td>
          </tr>
        </table>
        
        <h3>Read the Full Comparison</h3>
        <a href="https://whichhealthshare.com/compare" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block;">View Detailed Comparison</a>
        
        <p>Next email: Final decision-making tips and next steps.</p>
        
        <p>Best,<br>WhichHealthShare Team</p>
      </body>
    </html>
  `
}

function generateFinalEmail(email: string): string {
  return `
    <html>
      <body style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Make Your Decision: Health Sharing Plans Close Soon</h2>
        <p>Hi there,</p>
        <p>You're one step away from choosing the right health plan for you and your family.</p>
        
        <h3>Your Action Items</h3>
        <ol>
          <li><strong>Review the comparison</strong> one more time at https://whichhealthshare.com/compare</li>
          <li><strong>Visit your top plan's website</strong> to enroll (takes 10-15 minutes)</li>
          <li><strong>Call their support team</strong> if you have any questions</li>
        </ol>
        
        <h3>Still Unsure?</h3>
        <p>Take the quiz again for personalized guidance, or reach out—we're here to help.</p>
        
        <a href="https://whichhealthshare.com/quiz" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block;">Retake Quiz</a>
        
        <p>Best,<br>WhichHealthShare Team</p>
      </body>
    </html>
  `
}
