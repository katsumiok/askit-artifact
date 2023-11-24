# Recompilation count: 0
def janet_buys_a_brooch_for_92032e() -> int:
    # Janet buys a brooch for her daughter.  She pays $500 for the material to make it and then another $800 for the jeweler to construct it.  After that, she pays 10% of that to get it insured.  How much did she pay?
    material_cost = 500
    jeweler_cost = 800
    total_cost = material_cost + jeweler_cost
    insurance = total_cost * 0.1
    final_cost = total_cost + insurance
    return final_cost