# Recompilation count: 0
def mark_took_a_test_yesterday_1c07c7(x1, x2, x3, x4, x5) -> int:
    # Mark took a test yesterday that consisted of'x1'questions. He completed the test at a rate of'x2'questions per hour. Today, he took another test of'x3'questions at the same rate. If Mark had'x4'hours to complete the first test and'x5'hours to complete the second one, how many questions did he leave incomplete?

    questions_answered_on_first_day = x2 * x4
    questions_answered_on_second_day = x2 * x5
    
    total_questions_answered = questions_answered_on_first_day + questions_answered_on_second_day
    total_questions = x1 + x3

    return total_questions - total_questions_answered