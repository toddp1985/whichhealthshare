# WhichHealthShare Daily Report Infrastructure

**Status:** ✅ Implemented and tested  
**Cron Schedule:** 9 AM CST (0 15 * * * UTC)  
**Delivery Method:** Direct Telegram message to Todd's chat  
**Cost:** $0 (no paid infrastructure)  
**Last Updated:** Feb 10, 2026  

---

## Overview

Daily 9 AM reports are sent automatically to Todd's Telegram chat with metrics including:
- **Visitors & Pageviews** (last 24h)
- **Quiz Completions** (last 24h)
- **Email Signups** (last 24h)
- **Top 3 Blog Posts** (by views)
- **Deployments** (git commits from last 24h)
- **Cost Tracking** (daily, weekly, monthly)

All in a single consolidated message.

---

## Architecture

### Endpoint
- **Route:** `/api/cron/daily-reports`
- **File:** `src/app/api/cron/daily-reports/route.ts`
- **Methods:** GET (cron) + POST (manual testing)

### Cron Configuration
**File:** `vercel.json`
```json
{
  "crons": [
    {
      "path": "/api/cron/daily-reports",
      "schedule": "0 15 * * *"
    }
  ]
}
```

**Schedule Explanation:**
- `0` = minute 0 (midnight UTC minute)
- `15` = 3 PM UTC = 9 AM CST (UTC-6 winter, UTC-5 summer)
- `* * *` = every day, month, weekday

### Data Sources

| Metric | Source | API | Status |
|--------|--------|-----|--------|
| Visitors | Plausible | `/api/v1/stats/aggregate` | ✓ Configured |
| Pageviews | Plausible | `/api/v1/stats/aggregate` | ✓ Configured |
| Quiz Completions | Supabase | `quiz_results` table | ✓ Configured |
| Email Signups | Supabase | `email_captures` table | ✓ Configured |
| Top Blog Posts | Plausible | `/api/v1/stats/breakdown` | ✓ Configured |
| Cost Tracking | Local file | `/cost-tracking/today.json` | ✓ Ready |
| Deployments | Git | `git log --since="24 hours"` | ✓ Automatic |

---

## Environment Variables (Required)

Set these in Vercel environment variables:

```bash
# Plausible Analytics
PLAUSIBLE_API_KEY=<todd-api-key>

# Telegram Delivery
TELEGRAM_BOT_TOKEN=<bot-token>
TELEGRAM_CHAT_ID=<todd-chat-id>

# Cron Security
CRON_SECRET=<random-secret>

# Supabase (already configured in .env.local)
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
```

---

## Message Format

### Sample Output
```
📊 WhichHealthShare Daily Report — Feb 10, 2026

📈 Metrics (Last 24h)
Visitors: 842
Pageviews: 2,156
Quiz Completions: 23
Email Signups: 12

📰 Top 3 Blog Posts
1. Health Sharing vs Insurance (89 views)
2. Cost Comparison Guide (67 views)
3. Coverage Explained (45 views)

📦 Deployed Today
• [FEATURE] Enhanced daily report with cost tracking
• [BLOG] Deploy: Blog post on health sharing comparisons

💰 Cost Tracking
Daily: $0.47 | Weekly: $8.45 | Monthly: $29.84

Generated automatically at 9 AM CST
```

### Design Principles
- **Emoji indicators** for quick scanning
- **Clear sections** (metrics, posts, deployments, costs)
- **Compact format** (single message, no threading)
- **HTML formatting** for Telegram (bold, italic for emphasis)
- **Graceful degradation** when data unavailable

---

## Error Handling

### API Failures
If any API fails, the report still sends with:
1. **Available data** from successful APIs
2. **Fallback values** (0, N/A) for failed APIs
3. **Error notification** in logs

### Critical Failure
If report generation fails entirely:
- Sends alert message: `⚠️ WhichHealthShare Daily Report — ERROR`
- Includes error details
- Doesn't fail silently

### Graceful Fallbacks
```typescript
visitorMetrics?.visitors || 0     // Default to 0
topBlogPosts.length > 0 ? ...     // Skip section if no data
costData.daily.toFixed(2)         // Always formatted as currency
```

---

## Testing

### Manual Trigger
```bash
cd whichhealthshare
export CRON_SECRET=<your-secret>
curl -X POST http://localhost:3000/api/cron/daily-reports \
  -H "Authorization: Bearer $CRON_SECRET"
```

### Test Script
```bash
./scripts/test-daily-report.sh
./scripts/test-daily-report.sh production
```

### What to Check
1. Response status: `200` (success) or `500` (error)
2. Metrics returned in JSON
3. Telegram message appears in chat
4. Message format is readable
5. No errors in Vercel logs

---

## Deployment Steps

### 1. Verify Code
```bash
cd whichhealthshare
git log --oneline | grep "daily-report"
```

### 2. Set Environment Variables
Go to Vercel dashboard → Project → Settings → Environment Variables

Add:
- `PLAUSIBLE_API_KEY` (use Todd's existing key)
- `TELEGRAM_BOT_TOKEN` (Telegram bot token)
- `TELEGRAM_CHAT_ID` (Todd's chat ID)
- `CRON_SECRET` (random secret string)

### 3. Deploy
```bash
git push origin main
# Vercel auto-deploys
```

### 4. Verify Cron
1. Check Vercel dashboard: Functions → Cron
2. Should show `/api/cron/daily-reports` with `0 15 * * *` schedule
3. Status: `Registered`

### 5. Test Production
```bash
curl https://whichhealthshare.com/api/cron/daily-reports \
  -H "Authorization: Bearer $CRON_SECRET"
```

### 6. Monitor First Report
- Check Telegram chat at ~9:05 AM CST
- Verify metrics are reasonable
- Check Vercel logs for errors
- If issues, adjust and re-deploy

---

## Maintenance

### Daily Checks
- ✓ Report appears in Telegram every morning
- ✓ Metrics look reasonable (no sudden spikes)
- ✓ No error messages in report

### Weekly Review
- Check Vercel cron logs
- Review metrics trends
- Verify cost tracking is updating
- Check git deployment count is reasonable

### Monthly Review
- Archive old reports
- Review cost trends
- Optimize if needed
- Update documentation

---

## Troubleshooting

### Report Not Appearing
1. **Check Vercel logs:** Functions → Cron
2. **Check secret:** Verify `CRON_SECRET` matches
3. **Check schedule:** Should be `0 15 * * *`
4. **Check Telegram:** Verify bot token and chat ID are correct

### Metrics Missing or Zero
1. **Plausible:** Verify API key is active
2. **Supabase:** Verify tables exist and have data
3. **Cost Tracking:** Verify `/cost-tracking/today.json` exists
4. **Git:** Verify commits were made in last 24h

### Telegram Not Sending
1. **Bot token:** Verify it's valid and active
2. **Chat ID:** Verify it's correct (negative number for group chats)
3. **Permissions:** Ensure bot has permission to send messages
4. **Network:** Check Vercel can reach Telegram API

---

## Features

### Current
- ✅ Visitor metrics (Plausible)
- ✅ Quiz completions (Supabase)
- ✅ Email signups (Supabase)
- ✅ Top blog posts (Plausible)
- ✅ Cost tracking (local file)
- ✅ Git deployments (automatic)
- ✅ Error handling (graceful)
- ✅ Manual testing

### Ready to Add
- 🔲 BallStreet stats (API endpoint available)
- 🔲 Traffic by page (Plausible breakdown)
- 🔲 Engagement trends (comparison to previous day)
- 🔲 Performance metrics (Vercel analytics)

---

## Cost Analysis

**Daily Report Cost: $0**

Breakdown:
- **Plausible API:** Free tier (already in use)
- **Supabase queries:** Minimal (included in plan)
- **Git log command:** Local execution (free)
- **Vercel cron:** Included in Pro plan (free)
- **Telegram API:** Free (no rate limits for bot messages)

**Monthly Cost:** $0 (no additional cost beyond current infrastructure)

---

## Code Review

### Key Functions
1. **`getVisitorMetrics()`** → Plausible API for visitors/pageviews
2. **`getQuizCompletions()`** → Supabase count query
3. **`getEmailSignups()`** → Supabase count query
4. **`getBlogMetrics()`** → Plausible breakdown (top posts)
5. **`getCostTracking()`** → Read from local file
6. **`getDeploymentInfo()`** → Git log parsing
7. **`sendTelegramAlert()`** → Telegram API call

### Error Handling Strategy
```typescript
// Each function returns safe defaults
getVisitorMetrics() → { visitors: 0, pageviews: 0 }
getQuizCompletions() → 0
getCostTracking() → { daily: 0, weekly: 0, monthly: 0 }

// If report fails entirely, sends alert instead of silent failure
catch (error) {
  await sendTelegramAlert(errorReport)
  return 500
}
```

---

## Security

### Cron Secret
- Verifies request is from Vercel cron (not from outside)
- Stored in environment variables
- Never logged or exposed
- Change if compromised

### API Keys
- All keys stored in Vercel environment
- Never committed to git
- Rotated if exposed
- Minimal permissions (read-only)

### Telegram Token
- Bot-specific token (limited permissions)
- Can send messages but not admin commands
- Can be revoked in Telegram settings
- Change if compromised

---

## Monitoring

### Success Indicators
- ✅ Report sent every weekday at 9 AM
- ✅ Metrics are reasonable (non-zero on active days)
- ✅ No error messages in Telegram
- ✅ Vercel logs show no errors

### Warning Signs
- ⚠️ Report not appearing for 2+ days
- ⚠️ Metrics consistently zero
- ⚠️ Error message in Telegram
- ⚠️ High error rate in Vercel logs

---

## References

- **Vercel Cron:** https://vercel.com/docs/cron-jobs
- **Plausible API:** https://plausible.io/docs/stats-api
- **Supabase REST API:** https://supabase.com/docs/reference/javascript/select
- **Telegram Bot API:** https://core.telegram.org/bots/api

---

## Support

Questions or issues?
1. Check Vercel cron logs
2. Review this documentation
3. Test endpoint manually
4. Check environment variables
5. Review git commit: `715d68dc` (Enhanced daily report implementation)

---

**Status:** Ready for production deployment  
**Last Verified:** Feb 10, 2026, 5:35 PM CST  
**Next Review:** Feb 17, 2026
