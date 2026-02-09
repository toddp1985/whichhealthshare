#!/bin/bash

echo "🔍 Running pre-deploy QA checks..."

ERRORS=0

# Check for broken price formatting (negative or zero prices)
echo "Checking price formatting..."
if grep -r "\-\$[0-9]" src/data/ministries/ 2>/dev/null; then
  echo "❌ Found negative price formatting"
  ERRORS=$((ERRORS+1))
fi

# Check for truncated descriptions (starting with special chars)
echo "Checking description formatting..."
if grep -r '"bestFor".*:.*"[^A-Za-z]' src/data/ministries/*.json 2>/dev/null; then
  echo "❌ Found truncated descriptions"
  ERRORS=$((ERRORS+1))
fi

# Check for empty bestFor fields
if grep -r '"bestFor".*:.*""' src/data/ministries/*.json 2>/dev/null; then
  echo "❌ Found empty descriptions"
  ERRORS=$((ERRORS+1))
fi

# Check for broken affiliate links
echo "Checking links..."
if grep -r 'href=""' src/ 2>/dev/null; then
  echo "❌ Found empty href links"
  ERRORS=$((ERRORS+1))
fi

if grep -r 'https://' src/data/ministries/*.json | grep -v 'https://[a-z]' 2>/dev/null; then
  echo "❌ Found malformed URLs"
  ERRORS=$((ERRORS+1))
fi

if [ $ERRORS -gt 0 ]; then
  echo "❌ QA check failed: $ERRORS issues found"
  exit 1
else
  echo "✅ All QA checks passed"
  exit 0
fi
