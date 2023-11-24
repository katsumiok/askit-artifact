# Recompilation count: 0
def craig_and_his_brother_take_078484(x1, x2, x3) -> int:
    # Craig's total letter count is simply the number of words he spelled multiplied by the number of letters in each word 
    craig_letter_count = x1 * x2
    
    # Craig's brother has spelled out words with a total count of x3 more letters than Craig
    brother_letter_count = craig_letter_count + x3
    
    # The total number of letters spelled by both is just the sum of their respective counts
    total_letters = craig_letter_count + brother_letter_count
    
    return total_letters