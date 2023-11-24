# Recompilation count: 0
def jane_has_saved_4_of_67319a(x1) -> int:
    # Jane has saved $4 of her allowance every week for the past 'x1' weeks. If she continues to save the same amount each week, how many more weeks will it take for her to have saved a total of $60?
    total_saved = x1 * 4
    remaining = 60 - total_saved
    if remaining <= 0:
        return 0
    else:
        return remaining // 4 if remaining % 4 == 0 else (remaining // 4) + 1