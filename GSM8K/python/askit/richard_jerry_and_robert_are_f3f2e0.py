# Recompilation count: 0
def richard_jerry_and_robert_are_f3f2e0(x1, x2, x3) -> int:
    # Richard, Jerry, and Robert are going to share 'x1' cherries. 
    # If Robert has 'x2' cherries, and has 'x3' more than Richard, 
    # how many more cherries does Robert have than Jerry?

    # Following the given condition Robert has x3 more cherries than Richard. 
    # Therefore, Richard has x2 - x3 cherries. 

    # And, Richard, Jerry, and Robert are going to share x1 cherries.
    # So, Jerry should have total cherries minus Robert's cherries and Richard's cherries.
    richard_cherries = x2 - x3
    jerry_cherries = x1 - (richard_cherries + x2)

    # After getting Jerry's number of cherries we just need to subtract this from the number of cherries that Robert has to find out 
    # how many more cherries Robert has than Jerry.
    return x2 - jerry_cherries