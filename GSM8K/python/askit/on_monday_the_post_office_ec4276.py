# Recompilation count: 0
def on_monday_the_post_office_ec4276(x1, x2, x3) -> int:
    # On Monday the post office delivered 'x1' letters.
    # On Tuesday they delivered 'x2' more than one-fifth as many as Monday.
    # On Wednesday they delivered 'x3' more than twice as many as they delivered on Tuesday.
    # How many letters did the post office deliver Monday - Wednesday?

    tuesday_delivery = x1 / 5 + x2
    wednesday_delivery = 2 * tuesday_delivery + x3
    
    total = x1 + tuesday_delivery + wednesday_delivery

    return total