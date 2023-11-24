# Recompilation count: 0
def there_are_x1_trees_in_3db8d8(x1, x2) -> int:
    # There are'x1'trees in Chris's yard.  
    # Ferdinand has half the number of trees that Chris has.  
    # Harry has'x2'more than twice the number of trees that Ferdinand has.  
    # How many more trees are in Harry's yard than Ferdinand's yard?

    # Ferdinand's tree count
    ferdinand_trees = x1 // 2  # Using floor division to ensure we get an integer result

    # Harry's tree count
    harry_trees = 2 * ferdinand_trees + x2

    # difference between Harry's trees and Ferdinand's trees
    difference = harry_trees - ferdinand_trees

    return difference