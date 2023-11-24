# Recompilation count: 0
def molly_is_catering_a_birthday_7b58b5(x1, x2, x3) -> int:
    # Molly is catering a birthday party for her sister and invited'x1'people.'x2'people want the chicken salad which is $6.50 per person and'x3'people want the pasta salad at $6 per person. What is the total amount Molly will pay for the catering?
    chicken_salad_cost = x2 * 6.50
    pasta_salad_cost = x3 * 6
    total_cost = chicken_salad_cost + pasta_salad_cost
    return total_cost