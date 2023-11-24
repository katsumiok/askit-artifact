# Recompilation count: 1
def to_have_the_car_for_f2f068(x1, x2, x3) -> int:
    # To have the car for the weekend, Wilson's report card needs to show that he received'x1'or higher in his math class.  
    # His math grade is calculated by the average of'x2'test scores.  
    # On those tests, he received: 65, 94, 81,'x3'and 74.  
    # calculate current math grade
    sum_of_scores = 65 + 94 + 81 + x3 + 74 
    current_math_grade = sum_of_scores / x2
    return current_math_grade