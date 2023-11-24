# Recompilation count: 0
def henry_and_x1_of_his_170dc4(x1, x2, x3) -> int:
    # Henry and 'x1' of his friends order 'x2' pizzas for lunch. Each pizza is cut into 'x3' slices. If Henry and his friends want to share the pizzas equally, how many slices can each of them have?
    total_slices = x2 * x3
    total_people = x1 + 1  # Including Henry
    slices_per_person = total_slices // total_people

    return slices_per_person