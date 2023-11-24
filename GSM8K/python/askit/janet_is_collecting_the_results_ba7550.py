# Recompilation count: 0
def janet_is_collecting_the_results_ba7550(x1, x2, x3, x4, x5) -> int:
    # Janet is collecting the results of Herbert Hoover Elementary School's annual standardized test.'x1'out of'x2'third-graders passed, along with'x3'out of'x4'fourth graders. The'x5'fifth graders had a pass rate that was twice the fourth grades' pass rate. What is the school's overall pass rate?
    
    # Calculate the number of fifth graders who passed
    # Since fifth grade pass rate is twice that of fourth grade, 
    # we calculate the fourth grade pass rate and multiply by 2
    x5_pass = ((x3/x4) * 2) * x5

    # total students
    total_students = x2 + x4 + x5

    # total pass
    total_pass = x1 + x3 + x5_pass

    # Calculate overall pass rate as a percentage
    overall_pass_rate = (total_pass / total_students) * 100

    return int(overall_pass_rate)