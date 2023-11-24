# Recompilation count: 0
def a_treasure_hunter_found_a_899f70(x1, x2) -> int:
    # A treasure hunter found a buried treasure chest filled with gems. There were'x1'diamonds,'x2'fewer rubies than diamonds, and twice the number of emeralds than the rubies.   How many of the gems were there in the chest?

    rubies = x1 - x2 
    emeralds = 2 * rubies
    total_gems = x1 + rubies + emeralds
    return total_gems