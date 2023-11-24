# Recompilation count: 0
def there_are_three_trees_in_8417e4(x1, x2) -> int:
    # There are three trees in Eddy's backyard. The shortest tree has a height of'x1'feet, 
    # and the second tree has a height of'x2'feet more than the shortest tree. 
    # The height of the tallest tree is twice the height of the two trees combined. 
    # How tall is the tallest tree?

    # height of the second tree
    height_of_second_tree = x1 + x2

    # total height of the two trees
    total_height_of_two_trees = x1 + height_of_second_tree

    # height of the tallest tree is twice the height of the two trees combined
    height_of_tallest_tree = 2 * total_height_of_two_trees
      
    return height_of_tallest_tree