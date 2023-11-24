# Recompilation count: 0
def last_month_tasha_made_80_d40399() -> int:
    # Last month, Tasha made $80 from selling lemonade and mowing lawns.
    # The first week, she mowed Kamala's lawn thrice as many times as she did Joe's.
    # The following week, she mowed Alba's lawn five times as she did Joe's.
    # If Joe paid Tasha $6 for her work.
    # how much did she make from lemonade sales?

    joe_lawn_mowing_payment_per_time = 6

    lawns_mowed_for_joe = 1  # We can assume this to simplify calculations
    lawns_mowed_for_kamala = lawns_mowed_for_joe * 3
    lawns_mowed_for_alba = lawns_mowed_for_joe * 5

    total_lawn_mowing_earning = (lawns_mowed_for_joe + lawns_mowed_for_kamala + lawns_mowed_for_alba) * joe_lawn_mowing_payment_per_time
    lemonade_sales_earning = 80 - total_lawn_mowing_earning

    return lemonade_sales_earning