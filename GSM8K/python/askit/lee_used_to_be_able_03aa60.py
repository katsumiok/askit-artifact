# Recompilation count: 0
def lee_used_to_be_able_03aa60(x1) -> int:
    # Lee used to be able to run the 400-meter hurdles two seconds faster than Gerald would run the 400-meter hurdles. 
    # But Gerald changed his diet, which improved his speed by 10%.  
    # If Lee runs the 400-meter hurdles in'x1'seconds, 
    # how fast can Gerald, with his improved diet, run the 400-meter hurdles, in seconds?
    
    # First, calculate Gerald's original time -->
    # which is 2 seconds slower than Lee
    gerald_original_time = x1 + 2
    
    # Now calculate Gerald's improved time, 
    # which is 10% faster than his original time
    gerald_improved_time = gerald_original_time - (gerald_original_time * 0.10)
    
    return gerald_improved_time