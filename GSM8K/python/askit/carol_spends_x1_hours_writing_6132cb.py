# Recompilation count: 0
def carol_spends_x1_hours_writing_6132cb(x1, x2) -> int:
    # Carol spends'x1'hours writing a song, half that much time recording it, and'x2'minutes editing it. What percentage of her total work time did she spend editing?
    total_time = x1 + x1/2 + x2/60  # to convert the editing time to hours from minutes and total time spent
    percentage_editing = (x2/60) / total_time * 100  # converting the editing time to hours and finding the percentage 
    return round(percentage_editing)