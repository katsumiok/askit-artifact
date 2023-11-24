# Recompilation count: 0
def watson_works_a_10_hour_7cf64d() -> int:
    # Watson works a 10-hour shift each day, five days a week. 
    # He earns $10 per hour and gets a $300 bonus each week if the company performs well. 
    # How much money did Watson make in April if the company performed well for the whole month?
    
    daily_earning = 10 * 10  # 10 hours earning in a day
    weekly_earning = daily_earning * 5  # 5 days earning in a week
    monthly_earning = weekly_earning * 4  # 4 weeks earning in a month
    bonus = 300 * 4  # 300 weekly bonus for 4 weeks

    total_earning = monthly_earning + bonus

    return total_earning