# Recompilation count: 0
def there_are_four_schools_competing_2d9788(x1) -> int:
    # There are four schools competing at a basketball tournament. 
    # Each school sent a boys and girls basketball team with 'x1' players each and a coach for each team.
    # The function calculates the total number of people sent by all schools.
    return 4 * ((x1 * 2) + 2) # 4 schools * ((x1 players * 2 teams) + 2 coaches)