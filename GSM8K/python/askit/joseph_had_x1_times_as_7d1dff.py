# Recompilation count: 1
def joseph_had_x1_times_as_7d1dff(x1, x2, x3) -> int:
    # Joseph had'x1'times as many notebooks as Martha. Martha decided she needed more notebooks and then bought'x2'more for a total of'x3'notebooks. How many more than Joseph does she now have?

    # calculate the original number of notebooks Martha had before she bought more
    original_martha_notebooks = x3 - x2
    
    # calculate the total number of notebooks Joseph has
    joseph_notebooks = original_martha_notebooks * x1
    
    # how many more than Joseph does Martha now have?
    difference = x3 - joseph_notebooks
    
    return difference