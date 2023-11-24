# Recompilation count: 1
def mary_buys_x1_bags_of_a494d4(x1, x2, x3) -> int:
    # Mary buys'x1'bags of M&Ms. The first bag has'x2'M&Ms in it. The second bag has'x3'more M&Ms than the first, and the third bag has a hole in it, so it only has half the number of M&Ms that the first bag had. How many M&Ms did Mary get total?
    bag1 = x2
    bag2 = x2 + x3
    bag3 = x2 / 2
    total_MMs = bag1 + bag2 + bag3
    return int(total_MMs)