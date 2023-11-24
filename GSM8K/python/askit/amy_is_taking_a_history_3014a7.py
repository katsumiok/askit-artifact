# Recompilation count: 0
def amy_is_taking_a_history_3014a7(x1, x2, x3, x4, x5) -> int:
    # Amy is taking a history test. She correctly answers 80% of the multiple-choice questions, 
    # 90% of the true/false questions, and 60% of the long-answer questions. The multiple-choice 
    # and true/false questions are worth 'x1' point each, and the long answer questions are worth 
    # 'x2' points each. How many points does Amy score if there are 'x3' multiple-choice questions, 
    # 'x4' true/false questions, and 'x5' long answer questions?
    multiple_choice = x3 * x1 * 0.8  # Amy's score from multiple-choice questions
    true_false = x4 * x1 * 0.9  # Amy's score from true/false questions
    long_answer = x5 * x2 * 0.6  # Amy's score from long-answer questions
    # Total score
    return int(multiple_choice + true_false + long_answer)