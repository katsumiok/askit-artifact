# Recompilation count: 1
def a_food_caterer_was_told_7f1d29(x1, x2) -> int:
    # A food caterer was told to prepare gourmet hot dogs for'x1'guests. While most people would only eat one hotdog, he prepared enough for half of the guests to be able to have two hotdogs. However,'x2'guests showed up, and everyone wanted a second hotdog. How many guests did not get a second hotdog?
    
    # Calculating total number of hotdogs prepared
    total_hotdogs = x1 + x1//2
    
    # From 'x2' guests, everyone wanted a second hotdog to then total hotdogs eaten would be '2*x2'
    # Guests who could not get second hotdog would be 'x2 - total_hotdogs'
    # If total hotdogs is greater than guests, then return 0 as no one was left without a hotdog
    return max(0, 2*x2 - total_hotdogs)