# Recompilation count: 0
def a_herd_consists_of_camels_5cce91(x1, x2) -> int:
    # A herd consists of camels and dromedaries. There are 'x1' heads and 'x2' humps. 
    # How many dromedaries are there if camels have two humps each and dromedaries have one hump each?
    # Let's say the number of dromedaries is 'd' and the number of camels is 'c'. 
    # From the problem we have the following two equations:
    # 1) d + c = x1  (since each animal has one head)
    # 2) d + 2*c = x2  (since dromedaries have 1 hump and camels have 2 humps)
    # Solving these equations we get d = x1 - c and substituting this into the second equation we get c = x2 - x1
    # So the number of dromedaries is d = 2*x1 - x2 

    return 2*x1 - x2