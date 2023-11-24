# Recompilation count: 0
def judy_bought_a_dozen_cups_559a40(x1, x2) -> int:
    # Judy bought a dozen cups and twice as many dishes as cups to take to the church's charity event. 
    # At the event, she found out that her friend had brought'x1'cups and'x2'more dishes than she had brought. 
    # What's the total number of utensils brought by the two?

    # Judy's utensils count
    judy_cups = 12
    judy_dishes = 2 * judy_cups

    # Friend's utensils count
    friend_cups = x1
    friend_dishes = judy_dishes + x2

    # Total utensils count
    total_utensils = judy_cups + judy_dishes + friend_cups + friend_dishes

    return total_utensils