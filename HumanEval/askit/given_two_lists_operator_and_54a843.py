# Recompilation count: 1
def given_two_lists_operator_and_54a843(operator: List[str], operand: List[int]) -> int:
    # Use python's built-in eval function to evaluate the algebraic expression
    expression = str(operand[0])
    for i in range(len(operator)):
        expression += operator[i] + str(operand[i+1])
    return eval(expression)