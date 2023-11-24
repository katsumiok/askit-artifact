# Recompilation count: 0
def kayla_is_having_her_birthday_20eb53(x1, x2, x3, x4) -> int:
    total_guests = x1 + x2 + x3 - x4
    base_price = 125
    additional_guest_price = 6
    if total_guests > 20: 
        additional_guests = total_guests - 20
    else: 
        additional_guests = 0
    total_cost = base_price + additional_guests * additional_guest_price
    return total_cost