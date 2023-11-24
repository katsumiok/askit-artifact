# Recompilation count: 0
def audrey_has_to_take_two_cd700d(x1, x2) -> int:
    # Audrey has to take two math tests to pass 6th grade. She must correctly answer 70% of the total questions to move on to the 7th grade. The first test has'x1'questions and she gets 60% of them correct. The second test has'x2'questions. How many questions does she need to get right on the second test to move onto the 7th grade?
    total_questions = x1 + x2
    minimum_correct_questions = int(0.7 * total_questions)

    correct_questions_in_first_test = int(0.6 * x1)

    return minimum_correct_questions - correct_questions_in_first_test