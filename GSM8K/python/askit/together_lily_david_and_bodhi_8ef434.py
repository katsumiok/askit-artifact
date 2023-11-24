# Recompilation count: 1
def together_lily_david_and_bodhi_8ef434(x1, x2) -> int:
    # Together Lily, David, and Bodhi collected'x1'insects. Lily found'x2'more than David. David found half of what Bodhi found. How many insects did Lily find?
    # let's say David found 'd' insects
    # then, lily found = d + x2 insects and Bodhi found = 2 * d insects
    # so, d + d + x2 + 2 * d = x1 implies, 4 * d + x2 = x1
    # solving this equation gives d = (x1 - x2) / 4
    david_found = (x1 - x2) / 4
    # insects found by lily 
    lily_found = david_found + x2
    return lily_found