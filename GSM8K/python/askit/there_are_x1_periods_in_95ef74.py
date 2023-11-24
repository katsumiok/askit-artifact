# Recompilation count: 0
def there_are_x1_periods_in_95ef74(x1, x2, x3, x4) -> int:
    # There are'x1'periods in the day for a normal student but John has to take'x2'extra classes.  Each class is'x3'minutes long.  He goes to class for'x4'days a week.  He then spends 1/16 of his weekly minutes each on Saturday and Sunday as extra learning time.  How many hours a week does he spend learning?

    # Total classes a day is normal + extra
    total_classes_per_day = x1 + x2

    # Total minutes he spends a day is total classes times the length of each class
    total_minutes_per_day = total_classes_per_day * x3

    # Total minutes he spends a week is total minutes a day times the days he goes to school
    total_minutes_week_school = total_minutes_per_day * x4

    # Total minutes he spends in weekend is total weekly school minutes divided by 16 (for both Saturday and Sunday)
    total_minutes_weekend = total_minutes_week_school / 16 * 2

    # Add up all the minutes and divide by 60 to get the hours
    total_hours = (total_minutes_week_school + total_minutes_weekend) / 60

    # Return the hours
    return int(total_hours)