# Recompilation count: 0
def john_brings_his_dog_to_f91f3a(x1) -> int:
    # John brings his dog to the vet. His dog needs 'x1' vaccines, which are $20 each, and a heartworm check. The heartworm check is 60% of his total bill. If he brought $125 with him, how much does he leave with?
    vaccines_cost = x1 * 20
    total_bill = vaccines_cost / 0.4  # since heartworm check is 60% of the bill, vaccines represent the 40% of the bill
    money_left = 125 - total_bill
    return round(money_left)