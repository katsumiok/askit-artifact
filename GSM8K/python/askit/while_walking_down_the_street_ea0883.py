# Recompilation count: 0
def while_walking_down_the_street_ea0883(x1) -> int:
    # While walking down the street with his 'x1' younger siblings, Greg found $20. To be fair to his siblings, he decided to split the money equally. How much money did each of them get?
    total_money = 20  # Greg found $20
    total_people = x1 + 1  # Greg and his 'x1' younger siblings
    money_per_person = total_money // total_people  # integer division returns the largest whole number
    return money_per_person