#!/bin/bash

# Test Daily Report Cron Endpoint
# Usage: ./scripts/test-daily-report.sh [local|production]

TARGET=${1:-local}
BASE_URL="http://localhost:3000"

if [ "$TARGET" = "production" ]; then
  BASE_URL="https://whichhealthshare.com"
fi

# Check for CRON_SECRET
if [ -z "$CRON_SECRET" ]; then
  echo "Error: CRON_SECRET environment variable not set"
  echo "Set it with: export CRON_SECRET=<your-secret>"
  exit 1
fi

echo "Testing Daily Report Endpoint"
echo "Target: $TARGET ($BASE_URL)"
echo "Timestamp: $(date)"
echo ""

# Call the endpoint
echo "Sending request to $BASE_URL/api/cron/daily-reports..."
echo ""

RESPONSE=$(curl -s -X POST "$BASE_URL/api/cron/daily-reports" \
  -H "Authorization: Bearer $CRON_SECRET" \
  -H "Content-Type: application/json" \
  -w "\nHTTP_STATUS:%{http_code}")

# Extract status code
HTTP_STATUS=$(echo "$RESPONSE" | grep "HTTP_STATUS" | cut -d: -f2)
BODY=$(echo "$RESPONSE" | sed '/HTTP_STATUS:/d')

echo "Response Status: $HTTP_STATUS"
echo ""
echo "Response Body:"
echo "$BODY" | jq '.' 2>/dev/null || echo "$BODY"
echo ""

if [ "$HTTP_STATUS" = "200" ]; then
  echo "✅ Test successful!"
  echo ""
  echo "Next steps:"
  echo "1. Check Telegram chat for daily report message"
  echo "2. Verify metrics in response match your analytics"
  echo "3. Schedule cron in Vercel: vercel cron deploy"
else
  echo "❌ Test failed with status $HTTP_STATUS"
  echo ""
  if echo "$BODY" | grep -q "Unauthorized"; then
    echo "Issue: Invalid CRON_SECRET"
    echo "Fix: Export correct CRON_SECRET from Vercel environment"
  elif echo "$BODY" | grep -q "Telegram"; then
    echo "Issue: Telegram configuration missing"
    echo "Fix: Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in Vercel"
  fi
fi
