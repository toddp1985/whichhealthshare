#!/bin/bash

# WhichHealthShare Comprehensive QA Audit
# Runs daily to catch formatting, link, and content issues

SITE="https://whichhealthshare.com"
ERRORS=0
WARNINGS=0

echo "🔍 WhichHealthShare QA Audit"
echo "============================"
echo ""

# Test 1: Check all main pages return 200
echo "Test 1: Page Status Codes"
for page in "" "/compare" "/quiz" "/reviews" "/blog" "/about" "/disclosure" "/privacy" "/terms"; do
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE$page")
  if [ "$HTTP_CODE" != "200" ]; then
    echo "❌ $page returned $HTTP_CODE"
    ERRORS=$((ERRORS+1))
  else
    echo "✅ $page"
  fi
done

echo ""

# Test 2: Check for broken links in footer
echo "Test 2: Footer Links (checking for 404s)"
FOOTER_LINKS=$(curl -s "$SITE" | grep -oE 'href="[^"]*"' | grep -v "_next\|/favicon" | sort -u)
for link in $FOOTER_LINKS; do
  url=$(echo $link | sed 's/href="//;s/"$//')
  if [[ $url == /* ]] && ! [[ $url == *"_next"* ]]; then
    CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE$url")
    if [ "$CODE" != "200" ]; then
      echo "❌ Footer link broken: $url ($CODE)"
      ERRORS=$((ERRORS+1))
    fi
  fi
done

echo ""

# Test 3: Check for empty links
echo "Test 3: Empty href attributes"
for page in "" "/compare" "/quiz" "/reviews"; do
  EMPTY=$(curl -s "$SITE$page" | grep -o 'href=""' | wc -l)
  if [ "$EMPTY" -gt 0 ]; then
    echo "❌ Found $EMPTY empty hrefs on $page"
    ERRORS=$((ERRORS+1))
  else
    echo "✅ No empty hrefs on $page"
  fi
done

echo ""

# Test 4: Check pricing format (no "-$" in prices)
echo "Test 4: Price Formatting"
PRICE_ISSUES=$(curl -s "$SITE" "$SITE/compare" | grep -oE '[\$\-][0-9]+[/mo]*' | grep '^\-\$' | wc -l)
if [ "$PRICE_ISSUES" -gt 0 ]; then
  echo "❌ Found $PRICE_ISSUES malformed prices (e.g., -\$)"
  ERRORS=$((ERRORS+1))
else
  echo "✅ All prices formatted correctly"
fi

echo ""

# Test 5: Check for truncated text (lines starting with symbols)
echo "Test 5: Text Truncation Detection"
TRUNCATED=$(curl -s "$SITE" | grep -oE '>[^<]*</' | grep -E '^>[-–—][A-Za-z]' | wc -l)
if [ "$TRUNCATED" -gt 0 ]; then
  echo "⚠️  Found $TRUNCATED possibly truncated text entries"
  WARNINGS=$((WARNINGS+1))
else
  echo "✅ No obvious text truncation"
fi

echo ""

# Test 6: Check external links (sample)
echo "Test 6: Sample External Links"
EXTERNAL_LINKS=(
  "https://www.zionhealthshare.com"
  "https://www.medi-share.org"
  "https://www.chministries.org"
  "https://www.gocrowdhealth.com"
  "https://presidiohealthcare.com"
)

for link in "${EXTERNAL_LINKS[@]}"; do
  CODE=$(curl -s -o /dev/null -w "%{http_code}" "$link")
  if [ "$CODE" -eq 200 ]; then
    echo "✅ $link"
  else
    echo "⚠️  $link returned $CODE"
    WARNINGS=$((WARNINGS+1))
  fi
done

echo ""
echo "============================"
echo "Summary:"
echo "❌ Critical Errors: $ERRORS"
echo "⚠️  Warnings: $WARNINGS"
echo ""

if [ $ERRORS -gt 0 ]; then
  echo "QA Failed - Fix errors before deployment"
  exit 1
else
  echo "✅ QA Passed"
  exit 0
fi
