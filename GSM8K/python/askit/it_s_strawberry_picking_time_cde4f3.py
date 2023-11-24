# Recompilation count: 0
def it_s_strawberry_picking_time_cde4f3(x1) -> int:
    # It's strawberry-picking time on Grandma Concetta's farm.  Tony can pick'x1'quarts of strawberries per hour, while Bobby picks one less quart of strawberries per hour than Tony.  Kathy can pick twice as many strawberries per hour as Bobby, and Ricky picks two fewer quarts of strawberries per hour than does Kathy.  In total, how many quarts of strawberries can Tony, Bobby, Ricky, and Kathy pick per hour on Grandma Concetta's farm?
    
    # Tony can pick x1 quarts per hour
    tony = x1
    # Bobby picks one less quart per hour than Tony
    bobby = tony - 1
    # Kathy can pick twice as many strawberries per hour as Bobby
    kathy = bobby * 2
    # Ricky picks two fewer quarts per hour than does Kathy
    ricky = kathy - 2
    # Total quarts they can pick per hour is the sum of each person's amount
    total = tony + bobby + kathy + ricky
    return total