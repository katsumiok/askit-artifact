# Recompilation count: 0
def samantha_has_x1_fewer_paintings_c3153e(x1, x2, x3) -> int:
    # Samantha has'x1'fewer paintings than Shelley, and Shelley has'x2'paintings more than Kim. If Samantha has'x3'paintings, how many paintings does Kim have?
    shelley_paintings = x3 + x1
    kim_paintings = shelley_paintings - x2
    return kim_paintings