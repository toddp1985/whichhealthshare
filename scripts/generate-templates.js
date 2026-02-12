const fs = require('fs');
const path = require('path');

// Create downloads directory if it doesn't exist
const downloadDir = path.join(__dirname, '../public/downloads');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// 1. Health-Sharing-Comparison-Guide.pdf (as HTML that prints to PDF)
const comparisonHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Health Sharing Comparison Guide</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    h1 { border-bottom: 3px solid #667eea; padding-bottom: 10px; }
    h2 { margin-top: 30px; color: #333; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    th { background-color: #f5f5f5; font-weight: bold; }
    .section { margin: 30px 0; page-break-inside: avoid; }
    .checkbox { margin-right: 10px; }
  </style>
</head>
<body>
  <h1>Health Sharing Plan Comparison Guide</h1>
  <p><strong>Your Guide to Evaluating Health Sharing Plans</strong></p>
  <p>Use this checklist to compare plans side-by-side.</p>

  <div class="section">
    <h2>Plan Comparison Checklist</h2>
    <table>
      <tr>
        <th>Feature</th>
        <th>Plan 1: ___________</th>
        <th>Plan 2: ___________</th>
        <th>Plan 3: ___________</th>
      </tr>
      <tr>
        <td><input type="checkbox" class="checkbox"> Monthly Cost</td>
        <td>$_____</td>
        <td>$_____</td>
        <td>$_____</td>
      </tr>
      <tr>
        <td><input type="checkbox" class="checkbox"> Initial Unshared Amount (IUA)</td>
        <td>$_____</td>
        <td>$_____</td>
        <td>$_____</td>
      </tr>
      <tr>
        <td><input type="checkbox" class="checkbox"> Coverage Cap</td>
        <td>_____</td>
        <td>_____</td>
        <td>_____</td>
      </tr>
      <tr>
        <td><input type="checkbox" class="checkbox"> Waiting Period (Pre-Existing)</td>
        <td>_____</td>
        <td>_____</td>
        <td>_____</td>
      </tr>
      <tr>
        <td><input type="checkbox" class="checkbox"> Maternity Coverage</td>
        <td>☐ Yes ☐ No</td>
        <td>☐ Yes ☐ No</td>
        <td>☐ Yes ☐ No</td>
      </tr>
      <tr>
        <td><input type="checkbox" class="checkbox"> Telehealth Included</td>
        <td>☐ Yes ☐ No</td>
        <td>☐ Yes ☐ No</td>
        <td>☐ Yes ☐ No</td>
      </tr>
      <tr>
        <td><input type="checkbox" class="checkbox"> Prescription Coverage</td>
        <td>☐ Yes ☐ No</td>
        <td>☐ Yes ☐ No</td>
        <td>☐ Yes ☐ No</td>
      </tr>
      <tr>
        <td><input type="checkbox" class="checkbox"> Faith Requirement</td>
        <td>_____</td>
        <td>_____</td>
        <td>_____</td>
      </tr>
    </table>
  </div>

  <div class="section">
    <h2>Questions to Ask Each Plan</h2>
    <ol>
      <li><input type="checkbox" class="checkbox"> When does my coverage start?</li>
      <li><input type="checkbox" class="checkbox"> What happens if I need care before coverage starts?</li>
      <li><input type="checkbox" class="checkbox"> Can I choose my own doctors?</li>
      <li><input type="checkbox" class="checkbox"> What's your process for sharing medical bills?</li>
      <li><input type="checkbox" class="checkbox"> How long does reimbursement take?</li>
      <li><input type="checkbox" class="checkbox"> Can I switch plans mid-year?</li>
      <li><input type="checkbox" class="checkbox"> What happens if I lose coverage?</li>
      <li><input type="checkbox" class="checkbox"> Are there any additional fees I should know about?</li>
    </ol>
  </div>

  <div class="section">
    <h2>Switching Timeline</h2>
    <ul>
      <li><strong>Month 1:</strong> Research plans, gather information</li>
      <li><strong>Month 2:</strong> Call plans, ask detailed questions</li>
      <li><strong>Month 3:</strong> Make decision, apply for coverage</li>
      <li><strong>Month 4:</strong> Coverage begins, notify old plan</li>
      <li><strong>Month 5:</strong> Switch fully, destroy old insurance cards</li>
    </ul>
  </div>

  <div class="section">
    <h2>Notes</h2>
    <p style="height: 100px; border: 1px solid #ddd; padding: 10px;"></p>
  </div>
</body>
</html>
`;

// Save comparison guide as HTML (can be printed to PDF)
fs.writeFileSync(
  path.join(downloadDir, 'Health-Sharing-Comparison-Guide.html'),
  comparisonHTML
);
console.log('✓ Created Health-Sharing-Comparison-Guide.html');

// 2. Cost Calculator - Simple (as CSV that opens in Excel)
const simpleCost = `SIMPLE COST CALCULATOR - WhichHealthShare.com
"Plan Name","Monthly Cost","Family Size","Annual Cost"
"Medi-Share","$300","4","$3,600"
"Zion HealthShare","$250","4","$3,000"
"CHM","$280","4","$3,360"
"","",""

Instructions:
1. Enter your plan name and monthly cost in row 1
2. Enter your family size 
3. Annual cost = Monthly Cost x 12

Example: If your plan costs $300/month, annual cost is $3,600

Notes:
- This shows base costs only
- Actual costs depend on medical needs
- Add your expected doctor visits to get total costs
`;

fs.writeFileSync(
  path.join(downloadDir, 'Cost-Calculator-Simple.csv'),
  simpleCost
);
console.log('✓ Created Cost-Calculator-Simple.csv');

// 3. Scenario Calculator - Advanced (as CSV)
const scenarioCost = `ADVANCED SCENARIO CALCULATOR - WhichHealthShare.com
"Medical Scenario","Your IUA","Coinsurance %","Total Cost Estimate"
"Minor Care (Doctor Visit, Antibiotics)","$500","20%","$500 + copay"
"Surgery (Appendectomy)","$1,000","20%","$1,000 + 20% of surgery cost"
"Chronic (Diabetes - 3 visits/year)","$500","20%","$500 + copay x 3"
"Major (Cancer Treatment, Hospitalization)","$2,000","20%","$2,000 + 20% of treatment"

How to use this calculator:
1. Enter your plan's IUA (Initial Unshared Amount / Deductible)
2. Enter your plan's coinsurance percentage
3. For each scenario, you'll pay: IUA + (percent coinsurance on costs beyond IUA)

SCENARIO BREAKDOWN:

Scenario 1: Minor Care (Doctor Visit + Antibiotics)
- Doctor visit: \$150
- Antibiotics: \$30
- Total medical cost: \$180
- YOU PAY: Your IUA (up to \$500) = \$180 (less than IUA)
- Your cost: \$180 (if you haven't hit your IUA yet)

Scenario 2: Surgery (Appendectomy)
- Surgery + hospital: \$15,000
- YOU PAY: Your IUA + 20% coinsurance on \$14,500 = \$2,900 + IUA

Scenario 3: Chronic Condition (Diabetes Management)
- 3 doctor visits x \$150 = \$450
- Monthly supplies = \$100 x 12 = \$1,200
- Total: \$1,650/year
- YOU PAY: Your IUA + 20% of \$1,150 = IUA + \$230

Scenario 4: Major Event (Cancer Treatment)
- Chemotherapy + hospital: \$50,000
- YOU PAY: Your IUA + 20% coinsurance on \$49,000 = IUA + \$9,800

Compare your actual plan's costs to these scenarios to understand your true expenses.
`;

fs.writeFileSync(
  path.join(downloadDir, 'Scenario-Calculator-Advanced.csv'),
  scenarioCost
);
console.log('✓ Created Scenario-Calculator-Advanced.csv');

console.log('\n✅ All templates created successfully!');
console.log('Files saved to: public/downloads/');
