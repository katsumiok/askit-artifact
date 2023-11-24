# Recompilation count: 0
def return_median_of_elements_in_4f5f24(l: List[Union[int, float]]) -> Union[int, float]:
    # Return median of elements in the list 'l'.
    l.sort()
    n = len(l)
    m = n - 1
    if (n % 2):
        return l[int((m)/2)]
    else:
        return (l[int(m/2)] + l[int((m/2) + 1)]) / 2.0