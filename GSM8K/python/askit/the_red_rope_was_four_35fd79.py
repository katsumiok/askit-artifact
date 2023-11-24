# Recompilation count: 1
def the_red_rope_was_four_35fd79(x1, x2, x3) -> int:
    # The red rope was four times the length of the blue rope. The blue rope was'x1'centimeters shorter than the yellow rope. If the'x2'ropes had a combined length of'x3'centimeters, what was the length of the red rope in centimeters?
    
    # Let's denote the length of the blue rope as 'b', the yellow one as 'y' and the red one as 'r'.
    # From the problem's description we know that:
    # r = 4*b  (1) (The red rope was four times the length of the blue rope)
    # b = y - x1 (2) (The blue rope was'x1'centimeters shorter than the yellow rope)
    # r + b + y = x3 (3) (The'x2'ropes had a combined length of'x3'centimeters)
     
    # From (1) and (2) we can express 'b' and 'y' in terms of 'r':
    # b = r/4
    # y = r/4 + x1
    
    # Substitution of 'b' and 'y' to (3) gives us equation with only one variable 'r':
    # r + r/4 + r/4 + x1 = x3
    # 1.5*r + x1 = x3
    # 1.5*r = x3 - x1
    # r = (x3 - x1) / 1.5

    return (x3 - x1) / 1.5