# Recompilation count: 0
def justin_has_a_jar_with_0f528f(x1, x2, x3, x4) -> int:
    # Justin has a jar with many coins in it. The jar has'x1'quarters,'x2'dimes,'x3'nickels, and'x4'pennies. What is the total dollar amount in the jar?
    total = 0.25 * x1 + 0.10 * x2 + 0.05 * x3 + 0.01 * x4
    return total