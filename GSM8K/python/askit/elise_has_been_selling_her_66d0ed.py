# Recompilation count: 0
def elise_has_been_selling_her_66d0ed(x1, x2) -> int:
    # Elise has been selling her Dad's collection of'x1'books for three years. Each book sells at 20$, and she sold twice as many books in the first year as she has sold in the current year. There are currently'x2'unsold books, and her sales number this year is 45. What's the total amount of money she earned in the second year?

    sales_this_year = 45
    sales_first_year = sales_this_year * 2 

    total_sales_in_three_years = x1 - x2
    sales_second_year = total_sales_in_three_years - sales_first_year - sales_this_year
    
    total_earned_second_year = sales_second_year * 20

    return total_earned_second_year