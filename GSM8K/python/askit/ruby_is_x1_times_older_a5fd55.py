# Recompilation count: 0
def ruby_is_x1_times_older_a5fd55(x1, x2, x3) -> int:
     # Ruby is x1 times as old as Sam.
     # In x2 years, Ruby will be x3 times as old as Sam.
     # How old is Sam now?
     
     # Iterate over possible ages for Sam from 1 to 100
     for sam_age in range(1, 100):
         # Calculate Ruby's age based on the fact that Ruby is 'x1' times older than Sam
         ruby_age = sam_age * x1
         # In 'x2' years, Ruby will be 'x3' times as old as Sam.
         if (sam_age + x2) * x3 == ruby_age + x2:
             return sam_age
     
     # If no solution is found within the considered range, return -1
     return -1