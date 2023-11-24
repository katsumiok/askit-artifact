# Recompilation count: 0
def miguel_uses_x1_pads_of_9d0160(x1, x2) -> int:
    # Miguel uses'x1'pads of paper a week for his drawing. 
    # If there are'x2'sheets of paper on a pad of paper, 
    # how many sheets of paper does he use every month?

    # Multiplying the number of pads used in a week by the number of sheets in each pad
    # gives the total number of sheets used in a week
    weekly_sheets = x1 * x2

    # Assuming Miguel uses the same amount of paper every week,
    # and considering a month to have approximately 4 weeks, 
    # we can calculate the monthly usage by multiplying the weekly usage by 4.
    monthly_sheets = weekly_sheets * 4

    return monthly_sheets