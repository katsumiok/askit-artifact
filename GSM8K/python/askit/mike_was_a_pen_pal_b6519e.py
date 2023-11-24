# Recompilation count: 0
def mike_was_a_pen_pal_b6519e(x1, x2, x3, x4, x5) -> int:
    # Mike was a pen pal with'x1'people.  He stopped being penpals with'x2'of them.  They each send'x3'letters a week that are'x4'pages long.  He responds in kind.  He can write a page every'x5'minutes.  How many hours does he spend writing a week?

    # calculate the number of his pen pals after he stopped being pen pals with 'x2' people
    total_pen_pals = x1 - x2

    # calculate the total pages he needs to write in a week
    total_pages = total_pen_pals * x3 * x4

    # calculate the minutes he spends on writing a page
    total_minutes = total_pages * x5

    # convert the minutes into hours
    total_hours = total_minutes / 60

    return total_hours