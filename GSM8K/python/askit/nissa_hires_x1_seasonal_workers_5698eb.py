# Recompilation count: 0
def nissa_hires_x1_seasonal_workers_5698eb(x1, x2) -> int:
    # Nissa hires 'x1' seasonal workers to play elves in her department store's Santa village.
    # a third of the elves quit after children vomit on them, 
    # then 'x2' of the remaining elves quit after kids kick their shins. 
    # How many elves are left?
    
    remaining_elves = x1 - (x1 / 3)  # After a third of the elves quit
    remaining_elves = remaining_elves - x2  # After 'x2' of the remaining elves quit
    
    return int(remaining_elves)