# Recompilation count: 0
def given_two_intervals_where_each_14b0f3(interval1: tuple, interval2: tuple) -> str:
    # define function for checking prime number
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    # find the intersection of the intervals
    start = max(interval1[0], interval2[0])
    end = min(interval1[1], interval2[1])
    length = max(0, end - start)
    
    return "YES" if is_prime(length) else "NO"