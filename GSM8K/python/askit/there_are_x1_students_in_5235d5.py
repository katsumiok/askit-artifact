# Recompilation count: 0
def there_are_x1_students_in_5235d5(x1, x2) -> int:
    # There are 'x1' students in Marissa’s class.
    # Each student started the year with 'x2' pencils.
    # After two months, 1/5 of the total pencils in class were used. 
    # At the end of the year, only 1/3 of the remaining pencils were left.
    total_pencils_start = x1 * x2
    pencils_after_two_months = total_pencils_start - (total_pencils_start * 1/5)
    pencils_end_of_year = pencils_after_two_months * (1/3)
    return int(pencils_end_of_year)