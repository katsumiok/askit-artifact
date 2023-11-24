# Recompilation count: 0
def there_are_twice_as_many_a82109(x1, x2) -> int:
    # There are twice as many boys as girls at Dr. Wertz's school. If there are 'x1' girls and 'x2' students to every teacher, how many teachers are there?
    # The total number of students is the number of girls plus twice the number of girls (since there are twice as many boys as girls)
    total_students = x1 + 2 * x1
    # The total number of teachers is the total number of students divided by the number of students to every teacher
    total_teachers = total_students / x2
    # Return the number of teachers
    return total_teachers