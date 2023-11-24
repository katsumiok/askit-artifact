# Recompilation count: 0
def julie_micah_and_mitchell_sold_0a008b(x1, x2) -> int:
    # Julie, Micah, and Mitchell sold 'x1' glasses of lemonade at their lemonade stand. Julie sold 'x2' glasses and the boys sold an equal number of glasses. How many more glasses did Julie sell than Micah?
    glasses_sold_by_boys = x1 - x2
    glasses_sold_by_each_boy = glasses_sold_by_boys / 2
    return x2 - glasses_sold_by_each_boy