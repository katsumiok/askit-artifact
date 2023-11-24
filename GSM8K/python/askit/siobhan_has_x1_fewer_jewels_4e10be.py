# Recompilation count: 0
def siobhan_has_x1_fewer_jewels_4e10be(x1, x2, x3) -> int:
    # Siobhan has 'x1' fewer jewels than Aaron. Aaron has 'x2' more jewels than half of Raymond's jewels. If Raymond has 'x3' jewels, how many jewels does Siobhan have?
    aaron_jewels = (x3 / 2) + x2
    siobhan_jewels = aaron_jewels - x1
    return int(siobhan_jewels)