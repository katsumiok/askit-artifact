# Recompilation count: 0
def three_teenagers_are_playing_soccer_0ce7d9(x1, x2, x3) -> int:
    # Three teenagers are playing soccer on the weekend. Richie, the first teenager, scored'x1'more goals than Mark and scored'x2'more goals than Anna. If Richie scored'x3'goals, how many goals did all three teenagers score?
    
    # Richie scored 'x3' goals.
    richie_goals = x3

    # Relative to Richie's score, Mark scored 'x1' less goals and Anna scored 'x2' less goals.
    mark_goals = richie_goals - x1
    anna_goals = richie_goals - x2

    # The total number of goals is the sum of the goals each teenager scored.
    total_goals = richie_goals + mark_goals + anna_goals

    return total_goals