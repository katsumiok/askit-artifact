# Recompilation count: 0
def checks_if_every_opening_bracket_28adbc(brackets) -> bool:
    # Initialize a counter for tracking unbalanced brackets
    unbalanced_brackets = 0
    
    # Iterate through each character in the string
    for bracket in brackets:
        # If the character is an opening bracket ("<"), increment the counter
        if bracket == "<":
            unbalanced_brackets += 1
        # If the character is a closing bracket (">"), decrement the counter
        elif bracket == ">":
            unbalanced_brackets -= 1
        
        # If the counter is negative at any point, return False (there's a closing bracket without a matching opening bracket)
        if unbalanced_brackets < 0:
            return False
    
    # If the counter is zero after iterating through all characters, return True (all brackets are balanced)
    # Otherwise, return False (there are opening brackets without matching closing brackets)
    return unbalanced_brackets == 0