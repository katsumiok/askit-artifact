# Recompilation count: 0
def tim_decides_to_cancel_his_080fab() -> int:
    # Tim decides to cancel his cable subscription and get streaming services.  He gets Netflix for $10 a month.  Hulu and Disney Plus normally cost $10 a month each but he saves 20% for bundling.  How much money does he save by cancelling his $60 cable package?
    netflix = 10
    hulu_disney = 10 + 10  # because each costs 10 dollars
    savings_for_bundling = (hulu_disney * 20) / 100  # 20% off for bundling
    hulu_disney -= savings_for_bundling

    total_streaming_cost = netflix + hulu_disney

    cable_cost = 60
    savings = cable_cost - total_streaming_cost

    return savings