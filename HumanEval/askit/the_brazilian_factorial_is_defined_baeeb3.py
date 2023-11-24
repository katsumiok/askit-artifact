# Recompilation count: 0
def the_brazilian_factorial_is_defined_baeeb3(n) -> int:
    def factorial(m):
        # calculate the factorial of a number
        result = 1
        for i in range(1, m + 1):
            result *= i
        return result
    
    # calculate the brazilian factorial
    brazilian_factorial = 1
    for i in range(n, 0, -1):
        brazilian_factorial *= factorial(i)
    
    return brazilian_factorial


# test with the example provided
print(the_brazilian_factorial_is_defined_baeeb3(4)) # 288
# can also add more tests
print(the_brazilian_factorial_is_defined_baeeb3(1)) # 1
print(the_brazilian_factorial_is_defined_baeeb3(2)) # 2
print(the_brazilian_factorial_is_defined_baeeb3(3)) # 12