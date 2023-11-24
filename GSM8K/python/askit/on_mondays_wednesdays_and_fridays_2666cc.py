# Recompilation count: 0
def on_mondays_wednesdays_and_fridays_2666cc(x1) -> int:
    # On Mondays, Wednesdays, and Fridays, college student Kimo has three 1-hour  classes each day.
    # This is a total of 3 * 1 = 3 hours per day.
    # On Tuesdays and Thursdays, he has two 2-hour classes each day.
    # This is a total of 2 * 2 = 4 hours per day
    # The total hours spent attending classes in a week are therefore 3 * 3 (Mon, Wed, Fri)
    # + 2 * 4 (Tue, Thu) = 9 + 8 = 17 hours
    # In 'x1' weeks, the total number of hours spent attending classes is therefore 17 * 'x1'
    return 17 * x1