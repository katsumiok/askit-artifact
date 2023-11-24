# Recompilation count: 0
def james_buys_a_plane_the_31280c() -> int:
    # cost of the plane
    plane_cost = 150000
    # monthly hanger rent
    hanger_rent = 5000
    # monthly fuel cost (twice the hanger rent)
    fuel_cost = 2 * hanger_rent
    # cost to maintain the plane for a year (hanger rent + fuel each month for 12 months)
    yearly_maintenance_cost = (hanger_rent + fuel_cost) * 12
    # total cost to buy and maintain the plane for the first year
    return plane_cost + yearly_maintenance_cost