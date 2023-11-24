# Recompilation count: 0
def sunny_is_selling_gingerbrea_and_d43110(x1, x2, x3, x4) -> int:
    # Sunny is selling gingerbread and apple pie for a fundraiser. On Saturday, he sold 'x1' boxes of gingerbread, 
    # and 'x2' fewer boxes of apple pie than on Sunday. 
    # On Sunday, he sold 'x3' more boxes of gingerbread than on Saturday, and 'x4' boxes of apple pie. 
    # If the gingerbread cost $6 and the apple pie cost $15, how much did Sunny earn for two days?

    gingerbread_price = 6
    apple_pie_price = 15

    # On Saturday
    saturday_gingerbread = x1
    saturday_apple_pie = x4 - x2 

    # On Sunday
    sunday_gingerbread = x1 + x3
    sunday_apple_pie = x4
    
    total_earning = (saturday_gingerbread + sunday_gingerbread) * gingerbread_price + (saturday_apple_pie + sunday_apple_pie) * apple_pie_price

    return total_earning