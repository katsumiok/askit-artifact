# Recompilation count: 0
def max_bought_stamps_at_the_205591(x1, x2, x3) -> int:
    # Max bought stamps at the post office. Some of the stamps had a snowflake design, some had a truck design, and some had a rose design. Max bought'x1'snowflake stamps. He bought'x2'more truck stamps than snowflake stamps, and'x3'fewer rose stamps than truck stamps. How many stamps did Max buy in all?
    snowflake_stamps = x1
    truck_stamps = snowflake_stamps + x2
    rose_stamps = truck_stamps - x3
    total_stamps = snowflake_stamps + truck_stamps + rose_stamps
    return total_stamps