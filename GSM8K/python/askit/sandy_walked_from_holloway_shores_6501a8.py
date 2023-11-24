# Recompilation count: 0
def sandy_walked_from_holloway_shores_6501a8(x1) -> int:
    # Sandy walked from Holloway Shores to Sun Valley Shores for 'x1'hours on a particular day.
    # She also walked half as many hours on the second day as she walked on the first day, to Hollock valley shores.
    # Calculate the total time Sandy took to walk in the two days in minutes.
    
    # Calculate time for day 2.
    x2 = x1/2
    
    # Convert total number of hours to minutes.
    total_minutes = (x1 + x2) * 60
    
    return total_minutes