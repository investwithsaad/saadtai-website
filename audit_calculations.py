#!/usr/bin/env python3
"""Audit calculations from how-to guides"""

print("=" * 60)
print("SCHENECTADY 5-UNIT CALCULATION AUDIT")
print("=" * 60)

# Given values from document
property_price_per_unit = 215_000
units = 5
total_investment = 1_075_000  # Document states
monthly_rent_per_unit = 1_100
annual_rent = monthly_rent_per_unit * 12 * units

# Calculate NOI (assuming typical multifamily operating expense ratio)
# Document states $96,000 NOI
operating_expense_ratio = 0.40  # Conservative 40%
annual_operating_expenses = annual_rent * operating_expense_ratio
annual_noi = annual_rent - annual_operating_expenses

print(f"\nGross Annual Rent: ${annual_rent:,}")
print(f"Operating Expenses (40%): ${annual_operating_expenses:,}")
print(f"Annual NOI: ${annual_noi:,}")
print(f"Document claims NOI: $96,000")

# Calculate mortgage payment (80% LTV, 6.5%, 30 years)
down_payment = 215_000  # Document states $215K down
loan_amount = total_investment * 0.80
interest_rate = 0.065
monthly_rate = interest_rate / 12
num_payments = 30 * 12
monthly_payment = loan_amount * (monthly_rate * (1 + monthly_rate)**num_payments) / ((1 + monthly_rate)**num_payments - 1)
annual_mortgage = monthly_payment * 12

print(f"\nLoan Amount (80% LTV): ${loan_amount:,}")
print(f"Annual Mortgage Payment: ${annual_mortgage:,.0f}")
print(f"Document claims: $57,600")

# Calculate cash flow
annual_cash_flow = annual_noi - annual_mortgage
monthly_cash_flow = annual_cash_flow / 12
cash_on_cash = (annual_cash_flow / down_payment) * 100

print(f"\nAnnual Cash Flow: ${annual_cash_flow:,.0f} (${monthly_cash_flow:,.0f}/month)")
print(f"Cash-on-Cash Return: {cash_on_cash:.1f}%")
print(f"Document claims: $38,400 ($3,200/month), 17.8% CoC")

print("\n" + "=" * 60)
print("CAP RATE VS CASH FLOW - Example Verification")
print("=" * 60)

# Example from cap-rate-vs-cash-flow.mdoc
property_price = 250_000
monthly_rent = 1_400
annual_rent_example = monthly_rent * 12
operating_expenses_annual = 4_200
noi_example = annual_rent_example - operating_expenses_annual
cap_rate = (noi_example / property_price) * 100

print(f"\nProperty Price: ${property_price:,}")
print(f"Annual Rent: ${annual_rent_example:,}")
print(f"Operating Expenses: ${operating_expenses_annual:,}")
print(f"NOI: ${noi_example:,}")
print(f"Cap Rate: {cap_rate:.2f}%")
print(f"Document claims: 5.04%")

# Cash flow calculation
monthly_operating_expenses = 350
loan_amount_example = property_price * 0.80
monthly_payment_example = loan_amount_example * (monthly_rate * (1 + monthly_rate)**num_payments) / ((1 + monthly_rate)**num_payments - 1)
monthly_cash_flow_example = monthly_rent - monthly_operating_expenses - monthly_payment_example

print(f"\nMonthly Rent: ${monthly_rent:,}")
print(f"Monthly Operating Expenses: ${monthly_operating_expenses:,}")
print(f"Monthly Mortgage (80% LTV, 6.5%, 30yr): ${monthly_payment_example:,.0f}")
print(f"Monthly Cash Flow: ${monthly_cash_flow_example:,.0f}")
print(f"Document claims: $34/month")

print("\n" + "=" * 60)
print("FIRST-TIME HOMEBUYER - Credit Score Impact")
print("=" * 60)

# Document claims "50-point difference costs you $20K+ over 30 years"
loan_amount_ftb = 300_000
rate_good_credit = 0.065  # 6.5%
rate_poor_credit = 0.075  # 7.5% (typical 50-point drop impact)

monthly_payment_good = loan_amount_ftb * (rate_good_credit/12 * (1 + rate_good_credit/12)**360) / ((1 + rate_good_credit/12)**360 - 1)
monthly_payment_poor = loan_amount_ftb * (rate_poor_credit/12 * (1 + rate_poor_credit/12)**360) / ((1 + rate_poor_credit/12)**360 - 1)

total_paid_good = monthly_payment_good * 360
total_paid_poor = monthly_payment_poor * 360
difference = total_paid_poor - total_paid_good

print(f"\n$300K Loan Comparison:")
print(f"Good Credit (6.5%): ${monthly_payment_good:,.0f}/month, ${total_paid_good:,.0f} total")
print(f"Poor Credit (7.5%): ${monthly_payment_poor:,.0f}/month, ${total_paid_poor:,.0f} total")
print(f"30-Year Difference: ${difference:,.0f}")
print(f"Document claims: $20K+ (Conservative - actual impact higher)")

print("\n" + "=" * 60)
print("CALCULATION AUDIT COMPLETE")
print("=" * 60)
