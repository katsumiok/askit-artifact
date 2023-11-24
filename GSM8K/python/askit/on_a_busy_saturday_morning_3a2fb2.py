# Recompilation count: 2
def on_a_busy_saturday_morning_3a2fb2(x1, x2, x3, x4) -> int:
    # subtract the guests that checked out early
    x1 = x1 - x2
    # subtract the guests that checked out late
    x1 = x1 - x3
    # add the guests that checked back in the afternoon (twice the number of those with late checkout)
    x1 = x1 + (2 * x3)
    # add the guests that checked in after dinner
    x1 = x1 + x4
    return x1