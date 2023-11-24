# Recompilation count: 0
def at_the_end_of_the_48a50e(x1, x2, x3) -> int:
    # At the end of the school year, Kate asked her teacher if she could have the'x1'boxes of'x2'crayons since they were all worn down to small pieces.  The teacher agreed.  Kate took the crayons home and decided to make crayon muffins by melting'x3'small pieces of crayons together in a muffin tin that she placed in an oven for a few minutes. If she can sell her muffin crayons for $1.50 each, how much money can Kate make?
    total_crayons = x1 * x2
    total_muffins = total_crayons // x3
    total_money = total_muffins * 1.5
    return total_money