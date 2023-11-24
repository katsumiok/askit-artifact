# Recompilation count: 0
def julia_s_boat_sprang_a_dd3938(x1) -> int:
    # Julia’s boat sprang a leak while she was out on the lake. The boat was taking on two liters of water for every ten feet she rowed back towards shore. It took her sixteen seconds to row twenty feet. The shore was'x1'seconds away. How much water had the boat taken on by the time Julia reached shore?
    # Calculate the distance to shore in feet
    distance_to_shore = (x1 / 16) * 20
    # Calculate the amount of water the boat takes on for the distance rowed
    water_taken_on = (distance_to_shore / 10) * 2
    return int(water_taken_on)