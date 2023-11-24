# Recompilation count: 0
def raphael_went_to_buy_some_2041a2(x1, x2) -> int:
    # Raphael went to buy some school supplies. He bought'x1'pens which cost $1.5 each,'x2'notebooks which cost $4 each, and a rim of bond paper which cost $20. How much did Raphael spend on everything?
    pen_cost = 1.5
    notebook_cost = 4
    paper_cost = 20

    total_cost = x1*pen_cost + x2*notebook_cost + paper_cost
    return int(total_cost)