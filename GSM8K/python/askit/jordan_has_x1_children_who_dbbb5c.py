# Recompilation count: 0
def jordan_has_x1_children_who_dbbb5c(x1, x2) -> int:
    # Jordan has'x1'children who wear diapers. Each child requires'x2'diaper changes per day. Jordan's wife changes half of the diapers. How many diapers does Jordan change per day?

    # Calculate total diapers needed in a day
    totalDiapers = x1 * x2

    # Jordan's wife changes half of the diapers so Jordan changes the other half
    jordanDiapers = totalDiapers // 2

    return jordanDiapers