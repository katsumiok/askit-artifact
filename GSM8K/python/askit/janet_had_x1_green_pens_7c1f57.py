# Recompilation count: 0
def janet_had_x1_green_pens_7c1f57(x1, x2, x3, x4, x5, x6) -> int:
    # Janet had'x1'green pens and'x2'yellow pens. Then she bought'x3'bags of blue pens and'x4'bags of red pens. There were'x5'pens in each bag of blue and'x6'pens in each bag of red. How many pens does Janet have now?
    blue_pens = x3 * x5
    red_pens = x4 * x6
    total_pens = x1 + x2 + blue_pens + red_pens
    return total_pens