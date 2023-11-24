# Recompilation count: 0
def a_local_gas_station_is_7f9a8f(x1) -> int:
    # A local gas station is selling gas for $3.00 a gallon.  An app company is offering $.20 cashback per gallon if you fill up at this station.  If someone buys 'x1' gallons of gas, how much with their gas be, after the cashback rewards?
    gas_price = 3.00
    cashback = 0.20
    total_cost = gas_price * x1
    total_cost_after_cashback = total_cost - (cashback * x1)
    
    return total_cost_after_cashback