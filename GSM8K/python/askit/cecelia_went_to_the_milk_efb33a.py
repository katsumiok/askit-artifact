# Recompilation count: 0
def cecelia_went_to_the_milk_efb33a(x1) -> int:
    # Cecelia went to the milk store and found out that a gallon jar costs $2 more than a half-gallon jar. If a gallon jar costs $5, calculate the total amount of money she spent on 10-gallon jars and'x1'half-gallon jars.
    gallon_jar_cost = 5
    half_gallon_jar_cost = gallon_jar_cost - 2
    total_cost = (10 * gallon_jar_cost) + (x1 * half_gallon_jar_cost)
    return total_cost