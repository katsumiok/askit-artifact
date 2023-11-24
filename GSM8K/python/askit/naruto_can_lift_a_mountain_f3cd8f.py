# Recompilation count: 0

def naruto_can_lift_a_mountain_f3cd8f(x1, x2, x3) -> int:
    # Naruto can lift a mountain ten times higher than Kagiyami can.  
    # But Kagiyami can lift a mountain'x1'times higher than Saskay can.  
    # And Saskay can lift a mountain'x2'times higher than Pompei can.  
    # If Pompei can lift a mountain'x3'inch, how high can Naruto lift a mountain, in feet?

    # Calculate how high Saskay can lift
    saskay_lift = x2 * x3

    # Calculate how high Kagiyami can lift
    kagiyami_lift = saskay_lift * x1

    # Calculate how high Naruto can lift
    naruto_lift = kagiyami_lift * 10

    # Convert inches to feet
    naruto_lift_feet = naruto_lift / 12

    return int(naruto_lift_feet)