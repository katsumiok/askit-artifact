# Recompilation count: 0
def carl_has_four_times_as_384e24(x1) -> int:
    # Carl has four times as many marbles as Sean and Sean has half as many marbles as Cal. 
    # If Sean has 'x1' marbles, how many marbles do Carl and Cal have combined?
    
    # Carl has 4 times as much as Sean
    carl = 4 * x1
    
    # Sean has half as many marbles as Cal, therefore Cal has 2 * Sean's marbles
    cal = 2 * x1
    
    # return the combined number of marbles
    return carl + cal