# Recompilation count: 0
def james_is_in_charge_of_555e90(x1) -> int:
    # James is in charge of running messages from the office to each teacher's classroom. 
    # If he delivers'x1'messages to Ms. Thompson and 1/3 as many messages to Mr. Yu, how many messages does he deliver total?
    x2 = x1 / 3  # messages delivered to Mr. Yu
    total_messages = x1 + x2  # total messages delivered
    return int(total_messages)