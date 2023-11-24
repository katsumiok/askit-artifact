# Recompilation count: 2
def the_zookeeper_feeds_all_the_c54cc7(x1, x2, x3, x4, x5) -> int:
    # The zookeeper feeds all the apes in the zoo. He orders all the bananas from a local farm every 'x1' months. 
    # If the monkeys need 'x2' bananas, the gorillas need 'x3' bananas, and the baboons need 'x4' bananas every month,
    # how many bananas does he need to order to last for 'x5' months?
    
    total_bananas_needed_per_month = x2 + x3 + x4
    number_of_orders_needed = x5 // x1
    
    total_bananas_needed = total_bananas_needed_per_month * number_of_orders_needed * x1
    extra_bananas_needed_for_remaining_months = total_bananas_needed_per_month * (x5 % x1)
    
    return total_bananas_needed + extra_bananas_needed_for_remaining_months