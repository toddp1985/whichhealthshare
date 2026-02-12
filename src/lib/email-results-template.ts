import { Ministry } from './data'

export function generateResultsEmailHTML(topPlans: any[], email: string, tier: string): string {
  const plansHTML = topPlans.slice(0, 3).map((result, i) => `
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 12px; font-weight: bold;">${i + 1}. ${result.ministry.name}</td>
      <td style="padding: 12px;">$${result.ministry.plans[0]?.monthlyRange?.individual?.min}-$${result.ministry.plans[0]?.monthlyRange?.individual?.max}/mo</td>
      <td style="padding: 12px;">⭐ ${result.ministry.rating}/5</td>
      <td style="padding: 12px; font-size: 13px; color: #666;">${result.reason}</td>
    </tr>
  `).join('')

  const downloadMessage = tier === '5' 
    ? 'Your $5 support includes: Comparison PDF + Simple Cost Calculator'
    : tier === '20'
    ? 'Your $20 support includes: Comparison PDF + Simple Cost Calculator + Advanced Scenario Calculator'
    : ''

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; }
          .header h1 { margin: 0; font-size: 24px; }
          .results-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          .cta-button { display: inline-block; padding: 12px 24px; background: #667eea; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
          .footer { font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Your Health Plan Matches</h1>
            <p>Based on your quiz answers, here are your top 3 recommendations:</p>
          </div>

          <table class="results-table">
            <thead>
              <tr style="background: #f5f5f5;">
                <th style="padding: 12px; text-align: left;">Plan</th>
                <th style="padding: 12px; text-align: left;">Monthly Cost</th>
                <th style="padding: 12px; text-align: left;">Rating</th>
                <th style="padding: 12px; text-align: left;">Why It Matches</th>
              </tr>
            </thead>
            <tbody>
              ${plansHTML}
            </tbody>
          </table>

          <div style="background: #f9f9f9; padding: 16px; border-radius: 6px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Premium Downloads</h3>
            <p>${downloadMessage}</p>
            <p style="font-size: 13px; color: #666; margin: 12px 0;">Download links available on your receipt page:</p>
            <a href="https://whichhealthshare.com/premium-success?tier=${tier}&email=${encodeURIComponent(email)}" class="cta-button">Access Your Downloads</a>
          </div>

          <p>Next steps:</p>
          <ol>
            <li>Review the comparison PDF to understand each plan's coverage details</li>
            <li>Use the cost calculator to model your expected costs based on your situation</li>
            <li>Contact the plans directly to ask questions (our guide includes tips)</li>
            <li>Make your decision and switch!</li>
          </ol>

          <div class="footer">
            <p>Questions? Reply to this email or visit <a href="https://whichhealthshare.com">WhichHealthShare.com</a></p>
            <p>© 2026 WhichHealthShare. User-supported independent research.</p>
          </div>
        </div>
      </body>
    </html>
  `
}
