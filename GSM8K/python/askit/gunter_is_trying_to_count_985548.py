# Recompilation count: 0
def gunter_is_trying_to_count_985548(x1) -> int:
    # Gunter is trying to count the jelly beans in a jar. He asks his friends how many they think are in the jar. One says 80. Another says'x1'more than half the first one. A third says 25% more than the first one. What is their average guess?
    friend1 = 80
    friend2 = 80/2 + x1
    friend3 = 80 + 0.25*80
    average_guess = (friend1 + friend2 + friend3) / 3
    return round(average_guess)