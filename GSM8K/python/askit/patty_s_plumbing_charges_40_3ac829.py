# Recompilation count: 0
def patty_s_plumbing_charges_40_3ac829() -> int:
    # Patty's Plumbing charges $40 to visit a house to make a repair, plus $35 per hour, or part thereof, for labor, plus parts. One job took 2.25 hours and used $60 in parts. How much did Patty charge?

    # Calculating labor charges
    hours = 2.25
    labor_charges = 35 * (hours // 1 if hours % 1 == 0 else (hours // 1) + 1)

    # Adding call out charge, labor charges and parts charges
    patty_charge = 40 + labor_charges + 60

    return int(patty_charge)