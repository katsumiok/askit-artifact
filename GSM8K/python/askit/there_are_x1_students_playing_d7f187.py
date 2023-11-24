# Recompilation count: 0
def there_are_x1_students_playing_d7f187(x1: int, x2: int, x3: int) -> int:
    # There are 'x1' students playing tennis and twice that number playing volleyball. 
    # There are 'x2' boys and 'x3' girls playing soccer.
    # If each student only participates in one group, how many students are there in total?
    volleyball_players = 2 * x1
    soccer_players = x2 + x3
    total_students = x1 + volleyball_players + soccer_players
    return total_students