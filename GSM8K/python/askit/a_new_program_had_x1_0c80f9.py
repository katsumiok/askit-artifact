# Recompilation count: 0
def a_new_program_had_x1_0c80f9(x1) -> int:
    # A new program had'x1'downloads in the first month. 
    # The number of downloads in the second month was three times as many as the downloads in the first month, 
    # but then reduced by 30% in the third month. 
    # How many downloads did the program have total over the three months?
    second_month_downloads = x1 * 3
    third_month_downloads = second_month_downloads - (second_month_downloads * 0.3)
    total_downloads = x1 + second_month_downloads + third_month_downloads
    return int(total_downloads)