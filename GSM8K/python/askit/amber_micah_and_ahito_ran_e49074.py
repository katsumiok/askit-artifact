# Recompilation count: 0
def amber_micah_and_ahito_ran_e49074(x1, x2) -> int:
    # Amber, Micah, and Ahito ran'x1'miles in total. Amber ran'x2'miles. Micah ran 3.5 times what Amber ran. How many miles did Ahito run?
    micah_ran = 3.5 * x2
    ahito_ran = x1 - (x2 + micah_ran)
    return ahito_ran