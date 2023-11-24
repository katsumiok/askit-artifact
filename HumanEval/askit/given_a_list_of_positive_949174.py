# Recompilation count: 0
def given_a_list_of_positive_949174(x: List[int]) -> List[int]:
    # filter out integers that contain an even digit and sort the result
    return sorted(filter(lambda i: not any(int(d) % 2 == 0 for d in str(i)), x))