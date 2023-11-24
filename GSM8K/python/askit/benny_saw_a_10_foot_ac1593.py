# Recompilation count: 0
def benny_saw_a_10_foot_ac1593(x1) -> int:
    # Benny saw a 10-foot shark with'x1'6-inch remoras attached to it. What percentage of the shark's body length is the combined length of the remoras?
    
    # Convert shark's length to inches since remora's length is in inches
    shark_length_in_inches = 10 * 12
    
    # Calculate the total length of remoras
    remoras_length = x1 * 6
    
    # Calculate the percentage
    percentage = (remoras_length/shark_length_in_inches) * 100
    
    # Return the percentage value as an integer
    return int(percentage)