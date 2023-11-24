# Recompilation count: 0
def a_tyrannosau_rex_ate_half_2209c9(x1) -> int:
    # First, we'll assume the weight after the allosaurus ate as 'x1'.
    # But before the allosaurus, there was 2 times more (because the velociraptor ate half), so it's 2*x1.
    # And before the velociraptor, again there were 2 times more (because the T-Rex ate half), so it's 2*2*x1 = 4*x1.
    # Hence, the weight of the triceratops before the T-Rex ate was 4 times of 'x1'.
    return 4 * x1