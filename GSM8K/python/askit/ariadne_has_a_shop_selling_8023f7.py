# Recompilation count: 0
def ariadne_has_a_shop_selling_8023f7() -> int:
    # Assume the price of both red and green hats are same
    red_hat_sales_first_month = 400
    green_hat_sales_first_month = 2 * red_hat_sales_first_month

    total_sales_first_month = red_hat_sales_first_month + green_hat_sales_first_month
    total_sales_second_month = 3/4 * total_sales_first_month

    total_sales = total_sales_first_month + total_sales_second_month

    return int(total_sales)