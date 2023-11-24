# Recompilation count: 0
def after_transferri_to_a_new_6a0b62(x1, x2) -> int:
    # After transferring to a new school, Amy made 'x1' more friends than Lily. 
    # If Lily made 'x2' friends, how many friends do Lily and Amy have together?
    amy_friends = x2 + x1 # friends that Amy made
    total_friends = amy_friends + x2 # total friends
    return total_friends