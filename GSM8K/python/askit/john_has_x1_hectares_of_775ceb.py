# Recompilation count: 0
def john_has_x1_hectares_of_775ceb(x1, x2, x3) -> int:
    # John has'x1'hectares of a pineapple field. There are'x2'pineapples per hectare. John can harvest his pineapples every'x3'months. How many pineapples can John harvest within a year?
    # The number of harvests in one year is 12 months divided by 'x3' months per harvest.
    # The total number of pineapples per harvest is 'x1' hectares times 'x2' pineapples per hectare.
    # Therefore, the total number of pineapples harvested in one year is the number of harvests times the number of pineapples per harvest.
    return (12 // x3) * (x1 * x2)