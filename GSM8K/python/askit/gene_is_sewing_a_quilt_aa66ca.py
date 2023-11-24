# Recompilation count: 0
def gene_is_sewing_a_quilt_aa66ca(x1) -> int:
    # Gene is sewing a quilt out of old souvenir t-shirts. He has one shirt from each vacation he has been on. Every shirt is its own quilt block. Each row is made of blocks from a different year of vacations. He goes on four vacations a year and has been vacationing since he was'x1'years old. He is now 34. How many quilt blocks does he have in total?
    
    # calculate the number of years he has been vacationing
    years_vacationing = 34 - x1

    # he goes on four vacations a year, so total quilt blocks would be years of vacationing * 4
    total_blocks = years_vacationing * 4

    return total_blocks