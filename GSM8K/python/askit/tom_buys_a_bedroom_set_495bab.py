# Recompilation count: 0
def tom_buys_a_bedroom_set_495bab() -> int:
    # Tom buys a bedroom set for $3000. He sells his old bedroom for $1000 and uses that to pay for part of the bedroom set. 
    remaining_cost = 3000 - 1000
    # He then has to pay 10% a month for the bedroom set. How much does he have to pay per month?
    monthly_payment = remaining_cost * 0.10
    return int(monthly_payment)