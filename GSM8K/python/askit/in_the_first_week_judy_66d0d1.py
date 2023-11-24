# Recompilation count: 0
def in_the_first_week_judy_66d0d1(x1, x2, x3) -> int:
    # In the first week, Judy read for'x1'minutes each night before going to sleep.
    # In the second week, she read a total of'x2'pages.
    # If she can read'x3'pages per 1.5 minutes, how many pages did she read in two weeks?

    # We calculate pages Judy read in the first week.
    # We know the total minutes she read in the first week (x1 * 7), 
    # and we know how many pages she can read per 1.5 minute (x3),
    # so we can calculate how many pages she can read per 1 minute (x3 / 1.5)
    # and then calculate total pages for the first week (x1 * 7 * (x3/1.5))

    pages_first_week = x1 * 7 * (x3 / 1.5)

    return int(pages_first_week + x2)