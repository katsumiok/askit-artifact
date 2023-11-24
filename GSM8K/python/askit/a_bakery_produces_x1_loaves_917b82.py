# Recompilation count: 0
def a_bakery_produces_x1_loaves_917b82(x1) -> int:
    # A bakery produces'x1'loaves of bread each day. Two-thirds of the loaves are sold in the morning and half of what is left is sold equally in the afternoon and evening. How many loaves of bread are sold in the afternoon?
    # Sold in the morning
    morning = (x1 * 2) // 3
    # Left after morning
    left_after_morning = x1 - morning
    # Sold in the afternoon
    afternoon = left_after_morning // 2
    return afternoon