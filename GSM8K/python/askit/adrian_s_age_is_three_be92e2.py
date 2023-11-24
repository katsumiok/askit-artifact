# Recompilation count: 0
def adrian_s_age_is_three_be92e2(x1) -> int:
    # Adrian's age is three times the age of Harriet, and Harriet is half the age of Zack.
    # Calculate the average age of the three in three years if Harriet is'x1'years old now.
    Adrian_age = 3 * x1
    Zack_age = 2 * x1
    average_age_in_three_years = ((Adrian_age + 3) + (Zack_age + 3) + (x1 + 3)) / 3
    return round(average_age_in_three_years)