/**
 * INVEST WITH SAAD - MULTIFAMILY INVESTOR FAQ DATA
 *
 * Frequently asked questions for small multifamily investors
 * 25 High-intent questions covering buying, selling, strategy, and portfolio management
 * Last Updated: 2025-12-31
 */

import { FAQ, FAQCategory } from '@/types/faq'

// ============================================================================
// FAQ CATEGORIES - INVESTOR FOCUSED
// ============================================================================

export const faqCategories: FAQCategory[] = [
  {
    id: 'first-time-investor',
    name: 'First-Time Investor Onboarding',
    description: 'Essential concepts and first steps for new multifamily investors.'
  },
  {
    id: 'financial-fundamentals',
    name: 'Financial Fundamentals',
    description: 'Master cap rates, cash flow, and deal analysis metrics to evaluate properties accurately.'
  },
  {
    id: 'capital-region-market',
    name: 'Capital Region Market',
    description: 'Local market insights for Albany, Schenectady, and Troy. Rent trends, cap rates, neighborhoods, and investment opportunities.'
  },
  {
    id: 'buying-multifamily',
    name: 'Buying Multifamily',
    description: 'Evaluating deals, underwriting, financing, and closing on 2-4 unit properties.'
  },
  {
    id: 'selling-multifamily',
    name: 'Selling & Exit Strategy',
    description: 'Timing exits, 1031 exchanges, portfolio simplification, and maximizing proceeds.'
  },
  {
    id: 'investor-strategy',
    name: 'Investor Strategy',
    description: 'Portfolio scaling, market timing, specialist guidance, and wealth building.'
  },
  {
    id: 'investor-network',
    name: 'Investor Network',
    description: 'Deal sourcing, off-market opportunities, and investor community access.'
  },
  {
    id: 'calculator-tools',
    name: 'Analysis & Tools',
    description: 'Using the investment calculator, comparing properties, and financial metrics.'
  }
]

// ============================================================================
// MULTIFAMILY INVESTOR & PORTFOLIO STRATEGY FAQs
// ============================================================================

export const multifamilyInvestorFAQs: FAQ[] = [
  // FIRST-TIME INVESTOR QUESTIONS
  {
    id: 'why-multifamily-real-estate-good-investment',
    q: 'Why is multifamily real estate a good investment?',
    a: "Multifamily properties offer multiple income streams—one building with 3-4 units generates three to four separate rent payments, spreading risk. If one tenant leaves, the others still pay rent and cover most fixed costs. Compare that to a single-family rental where one vacancy wipes out all income.\n\nMultifamily also benefits from leverage and control. You control the property (vs stocks where you're passive), you can refinance and extract equity, and you can improve operations to increase cash flow. A stock investor hopes for price appreciation; a multifamily investor creates value through management.\n\nTax benefits matter: depreciation shelters income, interest and expenses reduce taxable income, and 1031 exchanges let you defer capital gains. These benefits compound over time, especially with multiple properties.\n\nIn the Capital Region specifically, entry prices are reasonable (compared to coastal markets), tenant demand is steady (employment diversity), and cap rates are attractive (7-9% on stable properties). You can often buy a property with 20-25% down, finance the rest, and have tenants partially cover the mortgage.\n\nThe downside: you're responsible for management, repairs, tenant quality, and market risk. It's not passive. But if you're willing to do the work, multifamily often outperforms stocks long-term due to leverage, control, and tax benefits."
  },
  {
    id: 'multifamily-risks-framework',
    q: 'What are the risks of multifamily real estate investing?',
    a: "Market risk: property values can decline if local employment softens, taxes spike, or interest rates rise. If you buy at peak pricing and the market softens, you could be underwater short-term.\n\nTenant risk: bad tenants create vacancy, late payments, eviction costs (3-6 months of legal battle, $3,000-$5,000+ in legal fees), and property damage. A single problem tenant can wipe out months of profit.\n\nRepair/CapEx risk: aging systems fail unexpectedly. A roof, boiler, or electrical panel failure can cost $5,000-$20,000+. If you didn't reserve properly, you're forced to pay from cash flow or lines of credit.\n\nFinancing risk: if you refinance and rates have risen, you might not qualify. If you're leveraged heavily and cash flow tightens, you struggle to cover mortgage payments.\n\nLegal/compliance risk: Certificate of Occupancy issues, lead paint violations, code compliance failures, and improper leases can halt sales, refinancing, or cost thousands in remediation.\n\nOpportunity cost: capital tied up in real estate isn't available for other investments. If real estate markets soften and stock markets boom, you might underperform.\n\nPersonal capacity: if you're inexperienced, you might overestimate cash flow, underestimate expenses, or make bad tenant decisions. Learning costs money early on.\n\nManage risks through: conservative underwriting, adequate reserves, proper tenant screening, professional property inspection before purchase, insurance, and ongoing maintenance. Risk isn't eliminated—it's managed."
  },
  {
    id: 'how-much-money-needed-get-started',
    q: 'How much money do I need to get started?',
    a: "It depends on your approach. House hacking (buying a 2-4 unit and living in one) requires: down payment (3-20% depending on loan type, often 15-20% for investor-friendly financing), closing costs (3-5% of purchase price), immediate repairs (often $5,000-$15,000+), and 6-12 months of reserves (3-6 months of expenses, not rent).\n\nExample: buying a $250,000 house hack property:\n- Down payment (15%): $37,500\n- Closing costs (4%): $10,000\n- Repairs/improvements: $10,000\n- Reserves (6 months): $12,000\n- Total: ~$70,000 out of pocket\n\nPure investment (non-owner-occupied) typically requires more reserves and down payment due to lending requirements.\n\nNon-leveraged (all cash) requires full purchase price plus reserves.\n\nThe mistake most first-time investors make: they have enough for down payment and closing but zero reserves. Then the first repair or vacancy wipes them out. Real capital is: down payment + closing + repairs + reserves.\n\nMany first-time investors use combinations: saved capital + borrowed from family + HELOC on primary residence + investment loan. The key: be honest about what you can afford. Undercapitalized deals create stress and bad decisions.\n\nStart with what you have, be conservative, and scale after your first deal succeeds. Don't stretch to buy a bigger property—focus on execution."
  },
  {
    id: 'first-step-becoming-multifamily-investor',
    q: 'What\'s my first step in becoming a multifamily investor?',
    a: "Step 1: Define your goal. Are you seeking cash flow (monthly income), appreciation (long-term growth), or learning (education before bigger moves)? This clarifies what to look for and how to evaluate deals.\n\nStep 2: Get financing pre-approval. Talk to a bank or mortgage broker about what you can borrow. This clarifies your buying power and what lenders require from you. You'll learn what documentation they need: tax returns, W-2s, bank statements, credit score, debt ratios.\n\nStep 3: Build your buy box. Define your target: which neighborhoods, what price range, what property condition (move-in ready vs needs work), what cap rate minimum. This focuses your search and prevents chasing every deal.\n\nStep 4: Build an underwriting template. Create a simple spreadsheet that takes property details (address, price, rents, expenses) and calculates: NOI, cap rate, cash-on-cash return, debt service coverage ratio. Use this for every property you evaluate. Consistency matters more than sophistication.\n\nStep 5: Start looking. Check MLS, talk to local agents, visit properties. You won't buy the first deal, but you'll learn market prices, what properties typically rent for, and what repairs cost.\n\nStep 6: Make offers. First offer might not work—that's okay. You're learning. Your first deal teaches more than 100 hours of reading.\n\nDon't overthink. Start with these six steps and learn by doing."
  },
  {
    id: 'most-common-first-multifamily-deal',
    q: 'What\'s the most common first multifamily deal?',
    a: "The most common path for first-time investors: buying a 2-3 unit property, owner-occupying one unit (house hack), and renting the other(s). Why this pattern?\n\nFinancing is easier: FHA and conventional loans offer better terms for owner-occupied 2-4 unit properties (lower down payment, often 3-10% vs 20%+ for investment-only).\n\nRisk is lower: your personal occupancy validates the neighborhood and the property. You understand tenant experience directly. Your mortgage is partially covered by tenant rent, reducing personal cash flow burden.\n\nLearning is faster: you experience property management, tenant interactions, and repairs firsthand. This accelerates learning versus a passive investment.\n\nCapital is lower: owner-occupancy financing requires less down and reserves, making entry more accessible.\n\nThe typical progression: house hack a 2-3 unit (2-3 years), build cash flow and reserves, then buy a second property to rent fully. By then you've learned management and have proof of income from first property.\n\nSecond-most-common path: buy a 4-unit investment property (without living there) if you already have capital, good credit, and understanding of the market. This requires stronger lending profile and reserves.\n\nLeast common first deal: house hacking a 4-unit or buying a larger property as pure investment. Usually because capital is limited and lending is harder for pure investment deals.\n\nStart with what you can qualify for and what matches your capital. Most successful investors start with house hack, not pure investment."
  },
  // FINANCIAL FUNDAMENTALS QUESTIONS
  {
    id: 'cap-rate-vs-cash-on-cash-vs-roi',
    q: "What's the difference between cap rate, cash-on-cash return, and ROI?",
    a: "Cap rate shows the property's raw profitability independent of financing. It's calculated as NOI (Net Operating Income) divided by purchase price. A 7% cap rate means a property generates $7,000 in annual NOI per $100,000 of purchase price.\n\nCash-on-cash return measures your actual return after financing. If you invest $20,000 down payment and receive $5,000 in annual cash flow, that's 25% cash-on-cash return.\n\nROI is often misused—be specific about whether you mean total return (including appreciation and paydown), cash-on-cash, or cap rate. In the Capital Region, typical cap rates range 7-9%, but investor cash-on-cash returns often reach 10-15% with conventional financing.\n\nUse cap rate to compare properties on equal footing; use cash-on-cash to evaluate your actual return with your specific financing terms."
  },
  {
    id: 'how-to-calculate-real-cash-flow',
    q: 'How do I calculate the real cash flow of a multifamily property?',
    a: "Start with gross scheduled rent—what you'd collect if all units were occupied and tenants paid on time. Subtract vacancy loss (typically 5-10% depending on market conditions), then subtract all operating expenses: property taxes, insurance, utilities you pay, maintenance reserves, property management (even if you self-manage, value your time), and CapEx reserves for major systems.\n\nThis gives you NOI (Net Operating Income). Then subtract your debt service (total annual mortgage payments). What remains is cash flow.\n\nExample: $60,000 gross annual rent minus $3,000 vacancy minus $20,000 in expenses equals $37,000 NOI. Minus $20,000 mortgage payment equals $17,000 annual cash flow.\n\nMany investors forget to model actual vacancy, realistic taxes (check your specific Capital Region neighborhood), and CapEx reserves. Without these, you're guessing, not investing. Every dollar of rent must be accounted for."
  },
  {
    id: 'operating-expenses-3-unit-vs-4-unit',
    q: 'What operating expenses should I budget for a 3-unit vs 4-unit property?',
    a: "A 4-unit typically has higher operating costs than a 3-unit due to more common areas, higher turnover probability, more utilities, and increased maintenance frequency. The biggest variable is who pays utilities: if tenants pay their own (separate meters), expenses drop significantly.\n\nBuilding age matters enormously. An older 4-unit with original systems will have much higher maintenance costs than a newer 3-unit. Similarly, tenant quality affects expenses—problem tenants create higher turnover and maintenance costs.\n\nFor budgeting, use these percentage-of-rent ranges: taxes 15-25%, insurance 5-8%, utilities (if you pay) 5-15%, maintenance and repairs 10-15%, management (even if self-managing) 5%, CapEx reserves 5-10%. These vary significantly by property condition and Capital Region neighborhood.\n\nThe key is budgeting based on the actual property, not generic percentages. Stress-test with higher expense assumptions to see if the deal still works."
  },
  {
    id: 'how-to-know-deal-pencils',
    q: 'How do I know if a deal actually pencils or if I\'m missing something?',
    a: "A deal pencils when it still works under conservative assumptions, not best-case scenarios. That means realistic expenses (not 10% of rent for everything), realistic vacancy (5-10% at minimum), room for unexpected repairs or rent softness, and adequate cash flow reserves.\n\nStress-test your numbers: assume expenses are 10-15% higher than budget, rents are 5-10% lower than market, and model one vacancy month per year. If the deal dies under these mild stress scenarios, it's not a deal.\n\nMiss common problems: trusting seller pro formas without verification, ignoring taxes (they're often 20-25% of rent in Capital Region), underestimating CapEx (roofs, boilers, electrical systems age and fail), and buying tenant problems (nonpaying tenants, illegal leases, eviction risk).\n\nIf the deal only works on paper with perfect execution and no surprises, it doesn't work. A real deal still cash flows conservatively, handles surprises, and builds reserves."
  },
  {
    id: 'maintenance-reserves-percent-noi',
    q: 'What percentage of NOI should maintenance reserves be?',
    a: "There's no universal percentage because building age and system condition matter far more than a formula. A new building with updated systems needs 5-8% of NOI for reserves. An older building with aging mechanicals needs 10-15%.\n\nBetter approach: estimate replacement timelines for major systems. A roof lasting 20 years costs $10,000 to replace—that's $500 per year reserve. A furnace lasting 15 years costs $8,000—that's $533 per year. Stack up all major systems (roof, boiler, electrical panel, plumbing, windows, foundation work) and divide by lifespan.\n\nIn the Capital Region, older multifamily stock (pre-1980s) typically requires heavier reserves. Many deals blow up because investors didn't reserve for aging systems that fail simultaneously.\n\nAlso separate emergency maintenance (day-to-day repairs) from CapEx reserves (large systems). Budget 8-12% of NOI for all maintenance reserves combined, with more allocated to older buildings. Document your assumptions and revisit after purchase when you understand the property's true condition."
  },
  {
    id: 'model-rent-growth-expense-inflation',
    q: 'How do I model rent growth and expense inflation in my 5-year projections?',
    a: "Rent growth varies by market, but don't assume historical appreciation will continue. Use conservative rent growth: 2-3% annually in stable markets, potentially higher in improving neighborhoods. Check Capital Region rent trends in recent years—inflation-adjusted growth is smaller than nominal growth feels.\n\nExpense inflation usually exceeds rent growth. Model 3-5% annual expense inflation for taxes, insurance, and maintenance. Property taxes in New York can spike faster, so review assessment history. Insurance costs rise 5-10% annually in some cases.\n\nRun multiple scenarios: base case (modest growth), bad case (flat rents, higher expenses), ugly case (rent decline, expense spike). If your deal depends on perfect rent growth and stable expenses, it's not stress-tested.\n\nFor 5-year projections, most investors use: 2-3% rent growth, 4% expense inflation, 5-10% property value growth if market supports it. Conservative assumes expenses grow faster than rents—this compresses cash flow over time, so you need adequate reserves. Your base-case deal should still work with flat rents and higher expenses."
  },
  // CAPITAL REGION MARKET QUESTIONS
  {
    id: 'capital-region-multifamily-market-2026',
    q: 'What\'s happening in the Capital Region multifamily market in 2026?',
    a: "The Capital Region continues to see steady rental demand driven by stable employment (education, healthcare, government, tech), relatively affordable housing costs compared to national markets, and a mix of owner-occupant and investor buyers. Interest rates remain the primary pricing driver—investors watch rate movements closely as they impact cap rates and financing terms.\n\nInventory levels are tight in desirable neighborhoods, with days on market (DOM) varying widely by location and condition. Some submarkets show modest rent growth; others remain flat. The market is still dominated by individual investors buying 2-4 unit properties rather than institutional buyers.\n\nTax environment remains challenging—New York's property tax burden is significant and varies by municipality. Schenectady and Troy often offer better cash flow due to lower pricing, while Albany offers more liquidity and tenant diversity.\n\nIn 2026, expect continued volatility based on rate environment, modest rent growth in stable neighborhoods (2-3%), and persistent supply constraints in certain neighborhoods. The biggest opportunity remains owner-occupant house hackers entering the market with better financing terms."
  },
  {
    id: 'capital-region-neighborhoods-improving-declining',
    q: 'Which Capital Region neighborhoods are improving vs declining?',
    a: "Improving neighborhoods typically show: increasing building permits, rising property values, declining days on market, stable or rising rents, and employment anchors moving in or expanding. New infrastructure (transit, commercial development) and lower crime trends also indicate improvement.\n\nDeclining neighborhoods show opposite signals: falling property values, longer DOM, stagnant rents, code violations increasing, and employment anchors shrinking.\n\nIn the Capital Region: some downtown cores and neighborhoods near Albany Medical Center, SUNY Albany, and tech companies show improvement signals. Neighborhoods with older stock, higher crime, or weak employment anchors show slower appreciation or flat trends.\n\nDon't rely on emotion or general assumptions. Research specific blocks using: recent sales data (MLS), crime statistics (police records), building permits (city assessor), and rent trends (historical rent data). A \"bad neighborhood\" with strong rent growth and new investment can outperform a \"good neighborhood\" with flat growth.\n\nI track this continuously—reach out if you want neighborhood-specific data for your analysis. Picking the right neighborhood is often more important than the property itself."
  },
  {
    id: 'what-drives-rent-growth-capital-region',
    q: 'What\'s driving rent growth in the Capital Region right now?',
    a: "Rent growth follows supply and demand: when demand exceeds supply, rents rise. In the Capital Region, demand comes from job creation (healthcare expanding, tech companies relocating, government employment stable), population migration from high-cost areas, and natural population growth.\n\nSupply constraints matter—limited new construction and older stock that can't be efficiently converted to market-rate units limit supply growth. When supply is tight relative to demand, rents rise.\n\nEmployment stability is critical. When major employers expand (hospitals, universities, tech companies), rents tend to grow. When employers shrink or leave, rents soften. The Capital Region benefits from diverse employment (education, healthcare, government, tech), reducing single-employer risk.\n\nThe biggest wildcard: tax policy and cost of living. New York's high tax burden and cost of living can dampen local growth. However, relative affordability versus coastal markets keeps some demand flowing.\n\nRealistically, Capital Region rent growth is typically 2-3% annually in stable neighborhoods, with higher growth in neighborhoods seeing new employment or investment. Don't count on aggressive rent growth—build deals around existing cash flow with growth as a bonus."
  },
  {
    id: 'capital-region-realistic-cap-rate',
    q: 'What\'s a realistic cap rate for a 2-4 unit in Albany/Schenectady right now?',
    a: "Cap rates in the Capital Region vary significantly by location, condition, and tenant quality. As of early 2026, market-level cap rates for well-maintained 2-4 unit properties range between 7-9%, depending on neighborhood and property type.\n\nAlbany typically trades on tighter cap rates (closer to 6.5-7.5%) due to stronger tenant demand and liquidity. Schenectady and Troy often show higher cap rates (7.5-9%) due to lower pricing and sometimes more tenant risk.\n\nCap rates above 9% usually indicate either: below-average neighborhoods with weaker tenant demand, properties needing heavy repairs (CapEx burden), problematic tenant situations, or unusual financing issues. Cap rates below 6% are typically owner-occupied deals or properties in exceptionally tight markets.\n\nRemember: cap rate is NOI divided by purchase price. Your real cap rate depends entirely on your underwriting accuracy. If you underestimate expenses or vacancy, your real cap rate will be lower than calculated.\n\nDon't chase cap rate—chase deals that still cash flow under conservative assumptions. A 7% cap rate on a stabilized building often beats an 8.5% cap rate on a property with tenant problems or deferred maintenance. Use cap rate to screen, but make sure the deal fundamentals are sound."
  },
  {
    id: 'capital-region-neighborhoods-best-appreciation',
    q: 'Which Capital Region neighborhoods have the best appreciation potential?',
    a: "Neighborhoods with appreciation potential typically combine: current affordability (lower valuation relative to income), new infrastructure or employment anchors, improving schools or amenities, and low current investor ownership (room for growth).\n\nIn the Capital Region, neighborhoods near SUNY Albany, Albany Medical Center, and emerging tech hubs have shown stronger appreciation. Downtown revitalization projects in Albany and Troy can drive neighborhood improvement. Neighborhoods with new transit or commercial development sometimes outperform.\n\nSchenectady's Stockade district and parts of Troy near employment centers show appreciation potential as investors discover off-the-radar opportunities. However, appreciation is never guaranteed—market cycles, employment changes, and tax policy shifts affect outcomes.\n\nBetter appreciation strategy: buy in neighborhoods with strong rent-to-price ratios (good cash flow today) in areas with employment stability. Appreciation follows cash flow and employment, not the reverse. A neighborhood with 7% cap rate and stable rents is more likely to appreciate than one with 5.5% cap rates and speculative demand.\n\nFocus on: employment stability, rent demand, crime trends, building permits, and days on market. If fundamentals are sound, appreciation typically follows. If appreciation depends on future development that hasn't happened yet, you're speculating, not investing."
  },
  {
    id: 'average-rent-capital-region-by-unit-count',
    q: 'What\'s the average rent in Capital Region 2-unit, 3-unit, 4-unit properties?',
    a: "Rent varies significantly by neighborhood and unit quality. As a rough baseline for stable Capital Region markets: 2-unit properties typically average $1,400-$1,800 per unit annually (depends on neighborhood and condition). 3-4 unit properties follow similar per-unit patterns but with slightly more variance.\n\nImportant: these are rough ranges. A unit in a premium neighborhood (downtown Albany, near SUNY, near hospital) commands 20-30% more rent than the same unit in a declining neighborhood. Unit quality matters enormously—renovated units with modern amenities rent higher.\n\nAlbany generally supports higher rents due to employment diversity. Schenectady often shows lower rents but improving trends. Troy rents vary dramatically by neighborhood.\n\nBetter approach than guessing: pull actual comparable rent data from recent leases in your target neighborhood. Check MLS listings, Zillow, and Craigslist for active rentals—that's the real market price, not an average. Survey 5-10 comparable rentals to establish your market rate.\n\nAlso consider: seasonality (rents often soften in winter, strengthen near universities in fall), lease terms (furnished vs unfurnished, lease length), and tenant risk (students rent different from families). Use comparable data specific to your neighborhood and unit type—don't rely on regional averages for underwriting."
  },
  {
    id: 'why-capital-region-cap-rates-differ-by-city',
    q: 'Why are cap rates lower/higher in Albany vs Schenectady?',
    a: "Cap rate differences reflect investor perception of risk and demand differences. Albany typically trades on tighter cap rates (lower cap rates mean higher prices) because investors perceive lower risk: more employment diversity, stronger tenant demand, better liquidity when selling.\n\nSchenectady and Troy show higher cap rates (higher prices are lower relative to rent) because: less investor familiarity, perceived higher tenant/neighborhood risk, tighter liquidity (fewer buyers), and sometimes higher cost of maintenance or vacancy risk.\n\nThese differences are rational: a buyer in Albany can likely sell faster and to a larger pool of investors, justifying tighter cap rates. A Schenectady investor must compensate for lower liquidity with higher returns.\n\nOther factors: tax differences by municipality (not huge but real), perception of employment stability (Albany benefits from government/education perception), and historical investor focus (Albany has more investor activity and media coverage).\n\nTactically, this creates arbitrage: a Schenectady property might offer 7.5% cap rate with similar risk profile to an Albany 6.5% cap rate. If you can value the property conservatively and manage the liquidity risk, Schenectady can outperform. Conversely, Albany's tighter cap rates reflect genuine lower risk for exit and tenant stability."
  },
  {
    id: 'capital-region-properties-for-sale-count',
    q: 'How many multifamily properties are for sale right now?',
    a: "Inventory of 2-4 unit properties fluctuates seasonally and with market conditions. In typical Capital Region markets, you might find 50-150 active 2-4 unit listings on MLS at any given time, depending on season and market strength.\n\nWinter typically shows lower inventory (more properties delisted); spring and fall show higher activity. Right now in early 2026, inventory levels are moderate—not a strong seller's market but supply is constrained in certain neighborhoods.\n\nInventory matters strategically: high inventory means more negotiating power (you can be selective). Low inventory means properties sell faster but you have fewer choices and less leverage on price.\n\nBetter approach: don't rely on MLS count alone. Track off-market opportunities through local wholesalers, property managers, and your network. Many Capital Region deals never hit MLS—they're direct deals between small investors. This is where Saad's investor network advantage shows.\n\nIf you're serious about buying, I can provide current inventory counts in your target neighborhoods updated monthly. This data helps you decide: is now a good time to be selective or should you move fast?"
  },
  {
    id: 'capital-region-typical-tenant-profile',
    q: 'What does a typical multifamily tenant profile look like?',
    a: "Capital Region multifamily tenants are diverse by location. Near colleges (SUNY, RPI), expect younger student/recent grad demographics. Near Albany Medical Center, expect mix of medical professionals and families. In working-class neighborhoods, expect blue-collar and service industry workers.\n\nIncome is typically 2.5-3.5x monthly rent—this is your qualification baseline. Most tenant sources come from: students (if near universities), medical professionals (if near hospitals), government workers (if near state buildings), and service/retail workers spread throughout.\n\nTenant quality varies enormously by neighborhood and rent level. Higher-rent units in premium neighborhoods attract professional tenants with stable income. Lower-rent units in weaker neighborhoods attract more tenant risk—higher turnover, more late payments, more management friction.\n\nTenant demographics often match neighborhood: young professionals near downtown revitalization zones, families in suburban neighborhoods, students in college towns. Tax burden and cost of living can affect tenant stability—higher taxes mean residents are more price-sensitive and may leave if rents rise.\n\nKey insight: understand your target tenant before buying. If you target young professionals, location near employment and amenities matters. If you target families, schools and safety matter. If you target students, proximity to campus matters. Buying a property without understanding who will rent it is a recipe for vacancy and problems."
  },
  {
    id: 'capital-region-hidden-costs-regulations',
    q: 'Are there hidden costs or regulations I should know about?',
    a: "New York state and local regulations add cost and complexity that out-of-state investors often miss. Key requirements: Certificate of Occupancy (CO) proving legal use; lead paint disclosure if pre-1978 (testing and abatement can cost thousands); heating requirements (heat to 68F minimum), hot water requirements, and electrical/plumbing code compliance.\n\nLead paint compliance is expensive if properties need abatement. Most older Capital Region properties contain lead—budget $5,000-$15,000 for professional abatement if tenants have children or if you're doing major renovation.\n\nProperty taxes can reassess and spike—review assessment history. Mortgage interest rates and terms differ for investor properties versus owner-occupied. Tenant protections in NY are strict: security deposit limits (one month rent), required disclosures, proper eviction procedures (taking 3-6 months, costing $3,000-$5,000+ in legal fees).\n\nLandlord insurance is required by lenders but often underestimated. Budget $1,000-$2,000+ annually per property. Code violations (unregistered units, improper heating, electrical issues) can halt sales or refinancing.\n\nMost problems are solvable but cost money and time. Always budget for: lead paint assessment, CO verification, code compliance inspection, and legal review of tenant situation before closing. These \"hidden\" costs are actually quite visible if you look."
  },
  // BUYING QUESTIONS
  {
    id: 'realistic-cap-rate-capital-region',
    q: 'What\'s a realistic cap rate for a 2-unit vs 3-4 unit property in the Capital Region right now?',
    a: 'In today\'s market, most small multifamily properties trade in a mid- to high-single-digit cap rate range, depending on location, condition, and upside. 2-unit properties in stronger neighborhoods often trade closer to 6–7%; 3–4 unit properties may trade slightly higher, especially when there\'s operational upside. Cap rates meaningfully above market usually rely on aggressive rent assumptions or understated expenses—that\'s a red flag.'
  },
  {
    id: 'multifamily-deal-pencils-underwriting',
    q: 'How do I know if a multifamily deal actually pencils, or if I\'m missing something in the underwriting?',
    a: 'A deal pencils when it still works under conservative assumptions, not best-case scenarios. That means realistic expenses (taxes, insurance, maintenance, vacancy), room for unexpected repairs or rent softness, and cash flow that still makes sense after reserves. If the deal only works on paper or requires perfect execution, it\'s a warning sign.'
  },
  {
    id: 'closing-costs-multifamily-property',
    q: 'What should I expect to pay for inspections, appraisals, and title work on a 3-unit property?',
    a: 'Typical Capital Region ranges: Inspections $700–$1,200+, Appraisal $600–$900, Attorney/title/recording $2,000–$3,500. Most buyers should budget $3,500–$5,500 in upfront costs before closing.'
  },
  {
    id: 'offmarket-vs-mls-multifamily',
    q: 'Should I be looking for off-market deals, or are MLS properties equally solid in this market?',
    a: 'Public listings maximize exposure and pricing. Off-market sales trade some price for simplicity, speed, and privacy. The right approach depends on your priorities. Generally, off-market deals often offer better pricing and reduced competition, but MLS properties are equally solid depending on your criteria.'
  },
  {
    id: 'single-family-to-multifamily-transition',
    q: 'I\'m buying my first multifamily after single-family flips. What\'s different about how I should evaluate it?',
    a: 'Multifamily evaluation emphasizes tenant stability, rent roll quality, and operational metrics rather than exit strategies. Focus on normalized income, realistic expenses, and the quality of existing tenants. Strong tenants provide stability; operational risk is more important than appreciation upside.'
  },
  {
    id: 'multifamily-closing-timeline',
    q: 'How long should closing actually take from offer to keys in this market?',
    a: 'Conventional financing: 35–50 days. Cash or local portfolio lenders: 14–30 days. Tenant issues, inspections, or municipal items can extend timelines and should be planned for. Work backward from your desired close date and build in buffer.'
  },
  {
    id: 'financing-programs-2-4-unit',
    q: 'What financing programs actually work for 2-4 unit properties, and which lenders aren\'t just tire-kickers?',
    a: 'Most buyers rely on conventional agency loans and local lenders that regularly finance small multifamily. Conventional agency loans for 2–4 unit investment properties typically cap around 75% LTV. Local banks and credit unions can offer flexibility when the property and borrower profile are strong. Straightforward deal structures tend to move faster and close more reliably. The biggest risk isn\'t leverage—it\'s choosing a lender who can\'t execute.'
  },
  // SELLING QUESTIONS
  {
    id: 'selling-4unit-burned-out',
    q: 'How quickly can you get my property on the market, and what do you need from me?',
    a: 'I can typically bring a multifamily property to market within 3–4 days. For tenant-occupied properties, I\'ll need current leases, rent roll, tenant information, and most recent property tax bill. You\'ll also notify tenants professionally that the property will be listed. After that, I handle everything—pricing, positioning, marketing, buyer coordination, and execution—so the process stays smooth and controlled.'
  },
  {
    id: 'selling-with-difficult-tenant',
    q: 'I want to sell, but I have a difficult tenant situation. Can I still get market value?',
    a: 'Yes—but expectations matter. Clean, cooperative buildings attract the strongest pricing. Tenant issues typically narrow the buyer pool and impact value. The right strategy minimizes disruption while protecting your outcome. Transparent communication about tenant situations actually protects value more than hiding problems.'
  },
  {
    id: '1031-exchange-vs-reinvestment',
    q: 'Should I do a 1031 exchange, or just take my proceeds and reinvest?',
    a: 'A 1031 can make sense if you plan to stay invested, already know what you want to buy next, and are comfortable with strict timelines. In some cases, flexibility and optionality are more valuable than tax deferral. Evaluate your personal situation and goals before deciding.'
  },
  {
    id: 'offmarket-sale-premium',
    q: 'If I\'m selling off-market vs. listing publicly, how much does that realistically affect price?',
    a: 'Generally, public listings maximize exposure and pricing. Off-market sales trade some price for simplicity, speed, and privacy. The right approach depends on your priorities—do you want maximum exposure and top dollar, or do you value privacy and certainty of close?'
  },
  {
    id: 'property-worth-cap-rate',
    q: 'What\'s my property actually worth—and how do I know the number isn\'t inflated?',
    a: 'Real value comes from actual income (not projections), normalized expenses, and comparable closed sales (not asking prices). We analyze your property against recent sales, market rents, and realistic operating expenses. If the numbers only work on paper, the value isn\'t real.'
  },
  {
    id: 'unwinding-portfolio-strategy',
    q: 'I want to unwind multiple properties over the next few years. What\'s the smart way to do that?',
    a: 'Most owners benefit from selling weaker performers first, timing stronger assets strategically, and using proceeds to simplify or upgrade their portfolio. This is portfolio planning, not just selling real estate. We think through the sequence and tax implications across multiple transactions.'
  },
  {
    id: 'selling-two-properties-redeploy',
    q: 'I\'m planning to sell two properties at once to move into larger multifamily. What should I know?',
    a: 'Key considerations: coordinating timelines, ensuring clean documentation, and preparing for deeper lender review on the acquisition side. Preparation directly affects deal size and leverage you\'ll be approved for. We handle the coordination so both sales support your purchase strategy.'
  },
  // MAIN PAGE QUESTIONS
  {
    id: 'investor-specialist-vs-traditional-agent',
    q: 'What\'s the difference between working with a traditional agent vs. someone who specializes in multifamily investor deals?',
    a: 'Traditional agents focus on retail buyers. Multifamily specialists focus on numbers, risk, and long-term outcomes. That difference compounds over time. Specialists ask detailed questions about income and expenses, stress-test assumptions, and aren\'t afraid to say no to bad deals.'
  },
  {
    id: 'advisor-understands-investor-math',
    q: 'How do I know if my advisor actually understands investor math?',
    a: 'They should ask detailed questions about income and expenses, stress-test assumptions, and be willing to say no to bad deals. If every deal sounds great, something\'s wrong. Real advisors prioritize your long-term portfolio health over transaction volume.'
  },
  {
    id: 'scaling-portfolio-3-5-properties',
    q: 'What does "scaling a portfolio" actually look like for someone with a few multifamily properties?',
    a: 'Scaling usually means fewer headaches (not just more doors), better locations and cleaner assets, and improved financing flexibility. Growth without control isn\'t progress. It\'s about strategic consolidation and quality, not just quantity.'
  },
  {
    id: 'buying-selling-frequency-wealth-building',
    q: 'How often should I be buying or selling to build real long-term wealth?',
    a: 'Most disciplined investors buy selectively, sell strategically, and avoid constant churn. Consistency beats speed. Higher transaction frequency usually signals reactive decision-making rather than strategic planning.'
  },
  // VIP INVESTOR LIST QUESTIONS
  {
    id: 'investor-group-membership-benefits',
    q: 'What does it take to join an active investor group that actually shares real opportunities?',
    a: 'Real groups expect ability to execute, clear criteria, and active participation. If it feels passive, it usually is. Active groups require commitment—members who can close when they say they will and contribute to the network.'
  },
  {
    id: 'deals-per-month-sourcing',
    q: 'How many real deals can a serious investor source in this market each month?',
    a: 'Realistically: 1–3 strong opportunities per month, with 1 accepted deal every 1–2 months. Higher volume usually means lower quality. Focus on deal quality over quantity—most chasing volume end up with weaker positions.'
  },
  {
    id: 'missing-mls-only-strategy',
    q: 'What am I missing if I\'m only looking at publicly listed properties?',
    a: 'You miss less competitive situations, direct owner conversations, and properties that never hit the public market. Public listings build discipline. Experience expands options. Both channels matter, but off-market access gives you an edge.'
  },
  // CALCULATOR PAGE QUESTIONS
  {
    id: 'property-offer-decision-calculator',
    q: 'I found a property at $X with $Y in rent—should I make an offer or walk away?',
    a: 'If conservative assumptions don\'t leave room for error, it\'s a pass or a lower offer. Run the numbers with realistic vacancy (7%+), actual market rents, and normalized expenses. If it only works with perfect execution, walk away or adjust your offer.'
  },
  {
    id: 'dscr-requirements-3unit',
    q: 'What debt service coverage ratio do lenders actually require for a 3-unit property right now?',
    a: 'Most lenders require 1.2-1.25x DSCR for investor-occupied 2-4 unit properties in the current lending environment. This means your net operating income needs to be 20-25% higher than your mortgage payment to qualify.'
  },
  {
    id: 'cashoncash-return-2unit',
    q: 'What cash-on-cash return should I realistically expect from a 2-unit?',
    a: 'Turnkey properties: 5–8%. Value-add opportunities: higher with proper execution. Returns follow discipline. Don\'t chase yield without understanding risk—conservative underwriting protects your downside.'
  },
  {
    id: 'comparing-properties-same-cap-rate',
    q: 'How do I compare two properties with the same cap rate?',
    a: 'Look beyond the cap rate: tenant stability, expense predictability, capital needs, and exit flexibility. Same cap doesn\'t mean same risk. Two 6% cap rate properties can have vastly different risk profiles based on tenant quality and deferred maintenance.'
  },
  // ORIGINAL QUESTIONS
  {
    id: 'scaling-investor-timing-exit',
    q: 'How do I know when to exit a property and reinvest proceeds?',
    a: 'Key signals include slowing appreciation, compressed cap rates, and market timing that favors buyers over sellers.'
  },
  {
    id: 'accidental-owner-burnout',
    q: 'I\'ve inherited or accumulated properties and I\'m exhausted. How do I exit respectfully?',
    a: 'We understand. Here\'s our approach: (1) Analyze your real financial situation—sometimes continuing makes sense, sometimes a clean exit does. (2) If exiting, we structure fair tenant transitions with 60-90 days notice (not harsh evictions). (3) We position properties to investor buyers who value clean handoffs. (4) We handle all tenant communications professionally. Many burned-out owners report feeling relieved and actually getting MORE for respectful exits because buyers know there\'s no drama.'
  },
  {
    id: 'capital-recycler-1031-timing',
    q: 'How do I coordinate a 1031 exchange when selling one property and buying another?',
    a: 'Timing is critical. Basic timeline: (1) Identify replacement property (must close within 45 days of closing on the sale). (2) Close on your sale. (3) 1031 QI (qualified intermediary) holds proceeds. (4) You have 180 days to identify replacement and close. Common gotcha: waiting too long to find a replacement. We source properties BEFORE you close your sale, giving you options ready to go. We coordinate the timing so your 1031 exchange happens seamlessly.'
  },
  {
    id: 'multifamily-underwriting-conservative',
    q: 'How do you underwrite multifamily deals? Are the numbers realistic?',
    a: 'We use conservative underwriting: (1) We verify actual rent rolls—not projected rents. (2) We research market rents independently in the neighborhood. (3) We assume 7% vacancy (not 2-3% like optimistic investors). (4) We factor in real maintenance budgets (1% of property value annually). Result: If our analysis says it pencils, it WILL pencil. You\'ll see deals that disappointed other investors because their projections were fantasies. Conservative = reliable.'
  },
  {
    id: 'portfolio-simplification-strategy',
    q: 'I own 6-8 properties across different neighborhoods. How do I simplify without leaving money on the table?',
    a: 'Portfolio simplification strategy: (1) Identify your strongest performers (best cap rate, lowest management hassle). (2) Identify your weakest (lowest rent, highest maintenance, problem tenants). (3) Exit the weak 2-3, consolidate into 3-4 stronger assets in better markets. (4) Reduces property count by 50%, management burden by 70%, doesn\'t impact income. Example: 8 units averaging 4.2% cap rate → 5 units averaging 5.1% cap rate, same income, half the work.'
  },
  {
    id: 'finding-off-market-multifamily-deals',
    q: 'How do you find off-market multifamily deals before they hit the MLS?',
    a: 'Our system: (1) Direct outreach to owner-occupants considering exit (mail campaigns, personal calls). (2) Relationships with other investors, wholesalers, estate attorneys. (3) Tax delinquent research and probate tracking. (4) Neighborhood relationships—we know when buildings change hands before listing. Off-market deals give you first-look advantage and usually better prices. Most of our deals go under contract 2-3 weeks before MLS listing, if they ever list.'
  },
  {
    id: 'tenant-quality-investment-decision',
    q: 'Does the quality of existing tenants affect the investment decision?',
    a: 'Absolutely. Strong tenants = stable cash flow + easy management. Poor tenants = chaos + vacancy risk. Our analysis includes tenant quality review: How long have they been there? Payment history? Are they maintained or problem cases? Strong tenants are worth money—clean, stable tenants reduce your cap rate discount by 0.5-1%. Conversely, problem tenants require immediate replacement strategy and tenant acquisition cost. We factor this into underwriting and negotiations.'
  },
  {
    id: 'property-manager-investor-relationship',
    q: 'How important is the property manager to my investment returns?',
    a: 'Critical. Best property manager can add 0.5-1% to your net returns through better rent collection, lower vacancy, reduced maintenance costs. Poor manager tanks returns through missed rents, high turnover, emergency repairs. We vet managers thoroughly and recommend only vetted professionals with track records. Many scaling investors benefit from upgrading their property manager—it\'s high-leverage improvement. We\'ll assess your current manager or recommend better ones.'
  },
  {
    id: 'multifamily-financing-small-buildings',
    q: 'What financing options are available for 2-4 unit multifamily in the Capital Region?',
    a: 'Good news: Small multifamily financing is easier than you think. (1) Conventional: 20% down, 6.5-7.5% rates, 30-year amort. (2) FHA: 15% down, slightly higher rates, investor-friendly. (3) Fannie Mae/Freddie Mac: down to 15% for investor-occupied. (4) Portfolio lenders: some local banks offer in-house financing, more flexible terms. We have relationships with 8+ lenders who specialize in 2-4 unit buildings and can shop rates for best terms.'
  }
]

export default {
  faqCategories,
  multifamilyInvestorFAQs
}
