# Recompilation count: 0
def jean_has_x1_lollipops_jean_c8d545(x1, x2, x3) -> int:
    remaining_lollipops = x1 - x2  # Jean's remaining lollipops after eating
    number_of_bags = remaining_lollipops // x3  # Number of full bags Jean can fill
    return number_of_bags