# Recompilation count: 0
def you_are_given_a_positive_3587c0(n: int) -> int:
    # You are given a positive integer 'n'. You have to create an integer array a of length 'n'. For each i (1 ≤ i ≤ 'n'), the value of a[i] = i * i - i + 1. Return the number of triples (a[i], a[j], a[k]) of a where i < j < k, and a[i] + a[j] + a[k] is a multiple of 3.
    # prepare list 'a'
    a = [i*i - i + 1 for i in range(1, n+1)]
    count = 0

    # iterate through all possible triples
    for i in range(len(a)):
        for j in range(i+1, len(a)):
            for k in range(j+1, len(a)):
                # if sum is a multiple of 3, increment count
                if (a[i] + a[j] + a[k]) % 3 == 0:
                    count += 1
                    
    return count