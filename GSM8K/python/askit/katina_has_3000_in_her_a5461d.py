# Recompilation count: 0
def katina_has_3000_in_her_a5461d(x1) -> int:
    # Katina has $3000 in her savings account. If she removes $100 from the account every month, 
    # how much money will be remaining within the account after'x1'years?
    
    total_withdrawn = x1 * 12 * 100 # $100 withdrawn per month for 'x1' years
    remaining_balance = 3000 - total_withdrawn
    return remaining_balance