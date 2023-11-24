# Recompilation count: 0
def a_company_spends_15000_on_b67ec0() -> int:
    # A company spends $15000 on advertising for a year, and then spends a third of that amount on advertising for another year.  What's the total amount the company spent on advertising for the two years?
    first_year_spend = 15000
    second_year_spend = first_year_spend / 3
    total_spend = first_year_spend + second_year_spend
    return round(total_spend)