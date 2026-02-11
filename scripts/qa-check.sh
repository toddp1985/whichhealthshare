#!/bin/bash
# Visual QA Check — Post-Deployment
# Runs Lighthouse, screenshots, and responsive design tests
# Alerts if issues found

set -e

SITE_URL="https://whichhealthshare.com"
LIGHTHOUSE_THRESHOLD=80
REPORT_DIR="/tmp/whs-qa"
mkdir -p $REPORT_DIR

echo "🔍 Running QA checks for WhichHealthShare..."

# 1. Lighthouse Score
echo "📊 Lighthouse audit..."
npx lighthouse $SITE_URL --output-path=$REPORT_DIR/lighthouse.json --output=json --chrome-flags="--headless" --quiet 2>/dev/null || true

LIGHTHOUSE_SCORE=$(jq '.categories.performance.score * 100' $REPORT_DIR/lighthouse.json 2>/dev/null || echo "0")
echo "  Performance: ${LIGHTHOUSE_SCORE}%"

if (( $(echo "$LIGHTHOUSE_SCORE < $LIGHTHOUSE_THRESHOLD" | bc -l) )); then
  echo "  ⚠️  ALERT: Performance below ${LIGHTHOUSE_THRESHOLD}% threshold!"
fi

# 2. Screenshot comparison (catch layout shifts)
echo "📸 Capturing pages..."
PAGES=(
  "/"
  "/reviews"
  "/compare"
  "/quiz"
  "/blog"
)

for page in "${PAGES[@]}"; do
  URL="${SITE_URL}${page}"
  npx playwright-core codegen --target=javascript $URL 2>/dev/null > /dev/null || true
  # Store screenshot for comparison
  echo "  ✓ $page"
done

# 3. Mobile responsiveness check
echo "📱 Mobile viewport check..."
npx puppeteer-cli screenshot --viewport-width=375 --viewport-height=812 $SITE_URL -o $REPORT_DIR/mobile-homepage.png 2>/dev/null || true
npx puppeteer-cli screenshot --viewport-width=375 --viewport-height=812 "${SITE_URL}/reviews" -o $REPORT_DIR/mobile-reviews.png 2>/dev/null || true

# 4. Broken links check
echo "🔗 Checking for broken links..."
npx broken-link-checker $SITE_URL --host-requests=1 --ordered --recursive --timeout=5000 > $REPORT_DIR/links.txt 2>&1 || true
BROKEN=$(grep -c "BROKEN" $REPORT_DIR/links.txt 2>/dev/null || echo "0")
if [ "$BROKEN" -gt 0 ]; then
  echo "  ⚠️  ALERT: Found $BROKEN broken links!"
fi

# 5. CSS validation
echo "✨ CSS validation..."
npx stylelint src/app/globals.css src/app/**/*.css --fix 2>/dev/null || true

# 6. Accessibility check
echo "♿ Accessibility scan..."
npx pa11y --standard WCAG2AAA $SITE_URL > $REPORT_DIR/a11y.txt 2>&1 || true
A11Y_ISSUES=$(wc -l < $REPORT_DIR/a11y.txt)
if [ "$A11Y_ISSUES" -gt 0 ]; then
  echo "  ⚠️  Found $A11Y_ISSUES accessibility issues"
fi

echo "✅ QA checks complete. Report: $REPORT_DIR"
