# Recompilation count: 0
def donny_can_only_drink_water_58fce4(x1, x2, x3) -> int:
    # Donny can only drink water if it's at least'x1'degrees. He has two mugs of water. One mug is'x2'degrees. The other is an unknown temperature. If he pours'x3'ounces of water from the 33-degree mug into his water bottle and one ounce from the other bottle, he is now able to drink the water.  At least how many degrees is the second bottle?
    # the final mixture at drinkable condition would have (x3 ounces *x2 degree + 1 ounce *unknown degree) / (x3 +1 ounces)
    # and the temperature is x1 degree. We can calculate the least temperature of the other bottle by setting them equal, and getting the unknown
    other_mug_temp = (x1 * (x3 + 1) - x2 * x3)
    return other_mug_temp