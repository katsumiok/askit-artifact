# Recompilation count: 0
def in_a_60_item_quiz_381bd3() -> int:
    # In a 60-item quiz, 40% of the questions are easy, 
    # and the rest are equally divided as average and difficult questions. 
    # If Aries is sure to get 75% of the easy questions, 
    # and half of the average and difficult questions correctly, 
    # how many points is she sure to get?

    total_questions = 60
    easy_questions = total_questions * 0.4
    other_questions = total_questions - easy_questions
    avg_diff_questions = other_questions / 2

    easy_points = easy_questions * 0.75
    other_points = avg_diff_questions * 0.5 + avg_diff_questions * 0.5

    total_points = int(easy_points + other_points)
    return total_points