# Recompilation count: 0
def great_grandma_jones_has_three_e11603() -> int:
    # Great Grandma Jones has three children.  And each of her children has three children of their own, who are Great Grandma Jones' grandchildren.  
    # And each of these grandchildren has three babies of their own, who are Great Grandma Jones' great grand-babies.
    # If all of the family show up at the family reunion, how many great grand-babies will be there for Great Grandma Jones to kiss?
    
    # number of children
    children = 3
    # number of grandchildren each child has
    grandchildren_per_child = 3
    # number of great grandbabies each grandchild has
    great_grandbabies_per_grandchild = 3

    # total number of great grandbabies
    total_great_grandbabies = children * grandchildren_per_child * great_grandbabies_per_grandchild
    return total_great_grandbabies