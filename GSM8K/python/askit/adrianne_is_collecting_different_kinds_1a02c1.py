# Recompilation count: 0
def adrianne_is_collecting_different_kinds_1a02c1(x1) -> int:
    # Adrianne is collecting different kinds of beads for making bracelets. Her mother gave her'x1'metallic beads. Her sister gave her ten more beads than her mother, and her friend gave her twice as many as her mother gave.  How many beads did Adrianne have altogether?
    sister_beads = x1 + 10
    friend_beads = x1 * 2 
    total_beads = x1 + sister_beads + friend_beads
    return total_beads