# Recompilation count: 0
def diane_gave_a_number_train_48d0ef(x1) -> int:
    # Diane gave a number train a starting value of 20. This starting value plus half the number was divided by'x1'and the resulting value was multiplied by the starting value minus 12. What was the final value of the number train?
    
    starting_value = 20
    half_number = starting_value / 2
    division_result = (starting_value + half_number) / x1
    final_value = division_result * (starting_value - 12)
    
    return final_value