# Recompilation count: 0
def marcell_and_beatrice_are_having_665f5d(x1, x2, x3) -> int:
    # Marcell and Beatrice are having a contest to see who can eat the most fruit roll-ups, so they unroll as many as they can find. 
    # Unfortunately, someone makes a mistake and Beatrice's was two roll-ups wide and'x1'rolls up long 
    # while Marcell's was'x2'roll-ups wide and'x3'roll-ups long. 
    # If they both ate their entire amount, how many did they eat on average?

    beatrice_total = 2 * x1   # Beatrice's total is 2 times the length
    marcell_total = x2 * x3   # Marcell's total is width times length
    total = beatrice_total + marcell_total  # Total amount eaten
    average = total / 2  # Divide by 2 to get the average

    return average