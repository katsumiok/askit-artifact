# Recompilation count: 0
def pauline_visits_her_favorite_local_03ebc2(x1, x2) -> int:
    # Pauline visits her favorite local museum three times a year. 
    # The cost of one visit is $2. 
    # After 'x1' years, the cost of one visit has increased by 150%, but Pauline decided not to give up any visit
    # and continued to go to the museum for 'x2' more years.
    # This function will calculate how much Pauline spent on all visits to the museum.

    cost_per_visit_initial = 2
    visits_per_year = 3

    # for first x1 years
    cost_for_first_x1_years = x1 * cost_per_visit_initial * visits_per_year

    # after x1 years, cost has increased by 150%
    cost_per_visit_increase = cost_per_visit_initial * 2.5

    # for next x2 years
    cost_for_next_x2_years = x2 * cost_per_visit_increase * visits_per_year

    # total cost
    total_cost = cost_for_first_x1_years + cost_for_next_x2_years

    return total_cost