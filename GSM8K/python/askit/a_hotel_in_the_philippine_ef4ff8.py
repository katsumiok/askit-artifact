# Recompilation count: 6
def a_hotel_in_the_philippine_ef4ff8(x1, x2, x3, x4, x5, x6, x7, x8) -> int:
    # assuming x5 and x6 are in 24 hours format
    x5_pm = (x5 % 12) + 12 if x5 else 12  # x5 in 24h format
    x6_am = x6 if x6 else 24  # x6 in 24h format
    
    if x6_am <= x5_pm:
        x6_am += 24  # adding 24 if x6 is in the next day

    # total time in hours Cameron will stay
    total_hours = x6_am - x5_pm
    
    if total_hours <= 12:
        return x1  # returning 12 hours charge if he is staying for 12 hrs or less
    else:
        additional_hours = total_hours - 12  # hours after 12 hours

        # calculating cost if he chose to pay x2 pesos for 24 hours
        cost_24_hrs = x2 + ((additional_hours - 12) * x4) if additional_hours > 12 else x2

        # calculating cost if he chose to pay x1 pesos for 12 hours and x7 pesos for additional hours
        cost_additional_hrs = x1 + (additional_hours * x7)

        return cost_24_hrs - cost_additional_hrs  # saving