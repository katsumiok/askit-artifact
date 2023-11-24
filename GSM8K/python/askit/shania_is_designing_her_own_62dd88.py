# Recompilation count: 0
def shania_is_designing_her_own_62dd88() -> int:
    # Let's denote the original length of the dress as x. According to the problem, the final length of the dress is the original length increased by 50% and additional 20cm for lace.
    # So, final_length = x + 0.5*x + 20. Given that the final length is 140cm, we can set up the equation: 140 = x + 0.5*x + 20.
    # We can solve this equation for x to find the original length of the dress.
    
    final_length = 140
    lace_trim = 20

    # Subtract the length of the lace trim from the final length
    after_subtracting_lace = final_length - lace_trim

    # Divide the result by 1.5 (because the dress was extended by 50% of its original length)
    original_length = after_subtracting_lace / 1.5
    
    # Returning the original length as an integer because the function definition states the return type should be int.
    return int(original_length)