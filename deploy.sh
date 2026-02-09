#!/bin/bash
# Deploy to GitHub and verify Vercel build succeeds

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get commit message
MESSAGE="${1:-Auto-deploy}"

echo "📦 Pushing to GitHub..."
git add -A
git commit -m "$MESSAGE" || echo "Nothing to commit"
git push origin main

echo "⏳ Waiting for Vercel to pick up the build (15s)..."
sleep 15

echo "🔍 Checking Vercel deployment status..."
LATEST=$(vercel list --yes 2>&1 | grep -E "https://whichhealthshare.*vercel.app" | head -1)

if [[ $LATEST == *"● Ready"* ]]; then
  echo -e "${GREEN}✅ Deployment successful!${NC}"
  echo "$LATEST"
  exit 0
elif [[ $LATEST == *"● Error"* ]]; then
  echo -e "${RED}❌ Deployment failed!${NC}"
  echo "$LATEST"
  exit 1
else
  echo -e "${YELLOW}⚠️  Build still in progress. Check manually:${NC}"
  echo "vercel list --yes"
  exit 1
fi
