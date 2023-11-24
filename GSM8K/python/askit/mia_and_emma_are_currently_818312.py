# Recompilation count: 0
def mia_and_emma_are_currently_818312(x1, x2) -> int:
    # Mia and Emma are currently'x1'years apart in age. If Mia, who is younger than Emma, is'x2'years old, what's the average of their ages?
    emma_age = x2 + x1
    avg_age = (x2 + emma_age) // 2
    return avg_age