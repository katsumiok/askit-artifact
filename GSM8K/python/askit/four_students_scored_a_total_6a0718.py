# Recompilation count: 0
def four_students_scored_a_total_6a0718(x1, x2, x3, x4) -> int:
    # Calculate scores for Yuri and Brianna
    yuri_score = x2 // 2 + x3
    brianna_score = x2 + x4
    # Subtract the scores of Naomi, Yuri, and Brianna from the total points
    jojo_score = x1 - (x2 + yuri_score + brianna_score)
    return jojo_score