# Recompilation count: 0
def a_candle_melts_by_x1_9016b1(x1) -> int:
    # A candle melts by'x1'centimeters every hour that it burns. How many centimeters shorter will a candle be after burning from 1:00 PM to 5:00 PM?
    hours_burning = 5 - 1  # number of hours from 1 pm to 5 pm
    decrease_in_length = x1 * hours_burning
    return decrease_in_length