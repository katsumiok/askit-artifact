# Recompilation count: 0
def cindy_s_math_and_science_9bd50d(x1, x2, x3) -> int:
    # Cindy's math and science books weigh 'x1' pounds each.  
    # Her French book weighs 'x2' pounds and her English book weighs 'x3' pounds.  
    # Her history book weighs twice as much as her English book.  
    # If Cindy carries all of her books at once, what will be the total weight of the books she is carrying?

    # Based on the problem, the total weight will be calculated as:
    # x1 (math book) + x1 (science book) + x2 (French book) + x3 (English book) + 2 * x3 (history book)
    total_weight = 2 * x1 + x2 + x3 + 2 * x3
    return total_weight