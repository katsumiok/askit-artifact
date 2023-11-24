# Recompilation count: 0
def a_loaf_of_bread_has_eef0e6(x1, x2) -> int:
    # A loaf of bread has'x1'slices. If Abby can eat'x2'slices a day while Josh can eat twice as much, how many days will the loaf of bread last?
    slices_eaten_by_Abby_per_day = x2
    slices_eaten_by_Josh_per_day = 2 * x2
    
    total_slices_eaten_per_day = slices_eaten_by_Abby_per_day + slices_eaten_by_Josh_per_day
    
    days_to_finish_loaf = x1 // total_slices_eaten_per_day
    
    return days_to_finish_loaf