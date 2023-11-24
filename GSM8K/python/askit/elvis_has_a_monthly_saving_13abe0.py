# Recompilation count: 0
def elvis_has_a_monthly_saving_13abe0() -> int:
    # Elvis has a monthly saving target of $1125. In April, he wants to save twice as much daily in the second half as he saves in the first half in order to hit his target. How much does he have to save for each day in the second half of the month?
    monthly_saving_target = 1125
    half_month_days = 30 // 2
    second_half_saving_rate_multiplier = 2
    # In the first half of the month, sum of daily saving and its double in the second half equals with target
    # => daily_saving * half_month_days + daily_saving * second_half_saving_rate_multiplier * half_month_days = monthly_saving_target
    # => daily_saving = monthly_saving_target / ((1+second_half_saving_rate_multiplier) * half_month_days)
    daily_saving_first_half = monthly_saving_target / ((1+second_half_saving_rate_multiplier) * half_month_days)
    daily_saving_second_half = daily_saving_first_half * second_half_saving_rate_multiplier
    return round(daily_saving_second_half)