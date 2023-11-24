# Recompilation count: 0
def mason_likes_eating_carrots_if_e34f66(x1, x2) -> int:
    # Mason likes eating carrots. If he eats'x1'carrots each on weekdays and'x2'carrots each on Saturday and Sunday, how many carrots does he eat a week?
    weekdays = x1 * 5
    weekends = x2 * 2
    total_carrots = weekdays + weekends
    return total_carrots