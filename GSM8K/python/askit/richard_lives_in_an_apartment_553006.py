# Recompilation count: 0
def richard_lives_in_an_apartment_553006(x1, x2) -> int:
    # Richard lives in an apartment building with'x1'floors. Each floor contains'x2'units, and 3/4 of the building is occupied. What's the total number of unoccupied units In the building?
    total_units = x1 * x2
    occupied_units = total_units * 3/4
    unoccupied_units = total_units - occupied_units
    return int(unoccupied_units)