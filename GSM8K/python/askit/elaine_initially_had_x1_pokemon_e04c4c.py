# Recompilation count: 0
def elaine_initially_had_x1_pokemon_e04c4c(x1, x2) -> int:
    first_month = x1 * 3
    second_month = first_month - x2
    third_month = 2 * (first_month + second_month)
    total = x1 + first_month + second_month + third_month
    return total