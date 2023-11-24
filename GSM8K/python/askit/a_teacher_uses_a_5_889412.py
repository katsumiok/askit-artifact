# Recompilation count: 0
def a_teacher_uses_a_5_889412(x1) -> int:
    # A teacher uses a 5-inch piece of chalk to write math equations on a chalkboard for his students. 
    # The teacher likes to conserve chalk, so he tries to only use 20% of the chalk each day. 
    # Since the teacher cannot write with a very small piece of chalk, he recycles the chalk when it is smaller
    # than'x1'inches. On Monday the teacher used a new piece of chalk. His students need extra help that day, so he ended
    # up writing more than usual. He used up 45% of the chalk by the end of the day. 
    # If the teacher goes back to using only 20% of the chalk each day, how many days does he have before he has to recycle
    # this piece?
    
    initial_length = 5         # Initial length of the chalk in inches
    used_length = initial_length * 0.45   # Amount of chalk used on Monday
    remaining_length = initial_length - used_length   # Length of chalk after Monday's use

    days = 0   # Counter for the number of days the chalk lasts
    while remaining_length >= x1:   # While the remaining length is larger than the minimum usable length
        remaining_length = remaining_length - (remaining_length * 0.20)  # 20% of the chalk is used each day
        days += 1   # Increment the day counter
        
    return days