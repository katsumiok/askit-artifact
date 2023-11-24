# Recompilation count: 0
def joe_has_twice_as_many_ab5de7(x1) -> int:
    # Joe has twice as many cars as Robert. 
    joes_cars = x1 * 2

    # He sells 20% of them 
    sold_cars = joes_cars * 0.20
    joes_cars -= sold_cars

    # and gives away twice as many cars as the number he sold to his mother.
    given_cars = sold_cars * 2
    joes_cars -= given_cars

    # If Robert has'x1'cars, how many cars does joe remain with after selling and giving some to his mother?
    return int(joes_cars)