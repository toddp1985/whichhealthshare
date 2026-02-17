#!/bin/bash
cd ~/Projects/whichhealthshare

~/.local/bin/claude -p "You are an autonomous product builder. Your mission: make whichhealthshare.com the number one health sharing comparison site. PHASE 1 AUDIT: Read the full codebase structure. Identify content gaps vs competitors. Check all pages for SEO basics (titles, meta descriptions, H1s, schema markup). Evaluate internal linking structure. Check for AI and LLM citation optimization. PHASE 2 PLAN: Rank all opportunities by traffic impact. Create a prioritized list. Focus on missing content, SEO gaps, conversion optimization, AI referral readiness. PHASE 3 BUILD: Work on branch agent/site-improvements. Implement the top improvements. Add structured data (FAQ schema, Review schema, Organization schema). Optimize meta descriptions. Add internal links. Ensure clear citable factual statements for AI referral. PHASE 4 COMMIT: Commit all changes with clear messages. Push the branch. Create a PR with a summary. Be thorough. Be autonomous. Make decisions. Do not ask just build." \
  --dangerously-skip-permissions \
  --model sonnet \
  --max-turns 75 \
  --max-budget-usd 5.00
