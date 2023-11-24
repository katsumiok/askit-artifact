# Recompilation count: 0
def zoey_and_sydney_are_having_51f6b2(x1, x2, x3, x4) -> int:
    # Zoey and Sydney are having a watermelon seed spitting contest. Whoever spits their seeds the most total distance wins. They each get one watermelon. Zoey's has'x1'seeds and she spits each one'x2'feet. Sydney's has'x3'she spits each one'x4'feet. What is the average total distance spat?
    
    # Calculate total distance spit by Zoey
    zoey_dist = x1 * x2
    
    # Calculate total distance spit by Sydney
    sydney_dist = x3 * x4
    
    # Calculate average total distance
    avg_dist = (zoey_dist + sydney_dist) / 2
    
    return avg_dist