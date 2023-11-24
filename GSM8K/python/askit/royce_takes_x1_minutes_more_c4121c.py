# Recompilation count: 0
def royce_takes_x1_minutes_more_c4121c(x1, x2) -> int:
    # Royce takes 'x1' minutes more than double Rob to shingle a house. If Rob takes 'x2' hours, how many minutes does Royce take?
    rob_minutes = x2 * 60 # convert hours to minutes
    royce_minutes = 2 * rob_minutes + x1
    return royce_minutes