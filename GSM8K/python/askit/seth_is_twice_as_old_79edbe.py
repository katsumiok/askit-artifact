# Recompilation count: 0
def seth_is_twice_as_old_79edbe(x1) -> int:
    # Seth is twice as old as Brooke. In 'x1' years, the sum of their ages will be 28. How old is Seth?
    # Considering the above condition, we can form an equation.
    # Since Seth is twice as old as Brooke, let's assume Brooke's age is 'b' and Seth's age will be '2b'.
    # As given, in 'x1' years, the sum of their ages will be 28
    # So, (b+x1) + (2b+x1) = 28.
    # After solving the above equation, we get b's value as (28 - 2*x1) / 3
    # So, Seth's age will be 2b, which is 2 * ((28 - 2*x1) / 3).
    
    b = (28 - 2*x1) / 3
    seth_age = 2 * b
    return int(seth_age)