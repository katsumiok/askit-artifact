# Recompilation count: 0
def one_dwarf_can_mine_x1_c113da(x1, x2, x3) -> int:
    # One dwarf can mine 'x1' pounds of ore per day with his bare hands. He can mine twice as much with an iron pickaxe and 50% more with a steel pickaxe than with an iron pickaxe.
    # How many pounds of ore can 'x2' dwarves with steel pickaxes mine in a month with 'x3' days?

    # first we determine how much one dwarf mines with a steel pickaxe
    iron_pickaxe_mining = x1 * 2 
    steel_pickaxe_mining = iron_pickaxe_mining * 1.5 

    # Now we calculate the total amount of mining for 'x2' dwarves for 'x3' days
    total_mining = steel_pickaxe_mining * x2 * x3

    return int(total_mining)  # we return total mining as an integer as pounds of ore can't be in decimals