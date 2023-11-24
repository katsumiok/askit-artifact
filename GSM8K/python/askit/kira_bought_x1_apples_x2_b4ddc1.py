# Recompilation count: 0
def kira_bought_x1_apples_x2_b4ddc1(x1, x2, x3, x4) -> int:
    # Kira bought'x1'apples,'x2'bananas and'x3'oranges at the grocery store. Lola ate'x4'pieces of the fruit. How many pieces are left?
    total_fruit = x1 + x2 + x3
    remaining_fruit = total_fruit - x4
    return remaining_fruit