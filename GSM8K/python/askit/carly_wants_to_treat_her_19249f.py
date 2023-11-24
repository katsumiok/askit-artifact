# Recompilation count: 0
def carly_wants_to_treat_her_19249f() -> int:
    # Carly wants to treat her friends. She orders five hamburgers at $4 each, ten packs of potato fries at $0.30 each pack, and five cans of fruit drinks at $2 each can.  How much change does Carly get back if she gives one fifty-dollar bill?
    hamburgers = 5 * 4
    fries = 10 * 0.30
    drinks = 5 * 2
    total_cost = hamburgers + fries + drinks
    change = 50 - total_cost
    return int(change)