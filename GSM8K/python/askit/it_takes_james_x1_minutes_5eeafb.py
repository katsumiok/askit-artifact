# Recompilation count: 0
def it_takes_james_x1_minutes_5eeafb(x1, x2, x3) -> int:
    # It takes James'x1'minutes to read'x2'pages of his book before he goes to bed. He reads'x3'pages of his book and then decides to go to sleep. How long does James spend reading, in minutes?

    # calculate the rate at which James reads the book
    pages_per_minute = x2/x1

    # calculate the time spent by James reading x3 pages
    time_spent = x3/pages_per_minute

    return int(time_spent)