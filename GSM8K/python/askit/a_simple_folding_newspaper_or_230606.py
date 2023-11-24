# Recompilation count: 0
def a_simple_folding_newspaper_or_230606(x1, x2, x3, x4) -> int:
    # A simple folding newspaper or tabloid can be made by folding a piece of paper vertically and unfolding. Then, say, page'x1'is printed on the left back, page'x2'is printed on the left front, and then, perhaps page'x3'is printed on the right back, and page'x4'is printed on the right front. How many pieces of paper would be used in a 32-page tabloid?
    total_pages = 32
    pages_per_sheet = 4  # since a sheet of paper has 4 printed areas (x1, x2, x3, x4)
    return total_pages // pages_per_sheet