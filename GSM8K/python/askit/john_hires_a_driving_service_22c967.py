# Recompilation count: 0
def john_hires_a_driving_service_22c967(x1, x2, x3) -> int:
    # John hires a driving service to get him to work each day.  His work is'x1'miles away and he has to go there and back each day.  He goes to work'x2'days a week for'x3'weeks a year.  He gets charged $2 per mile driven and he also gives his driver a $150 bonus per month.  How much does he pay a year for driving?
    
    # Calculating total mileage for a day
    total_miles_per_day = 2*x1 # he has to go there and back each day
    
    # Calculating total mileage for a week
    total_miles_per_week = total_miles_per_day * x2
    
    # Calculating total mileage for a year
    total_miles_per_year = total_miles_per_week * x3
    
    # Calculating total payment for mileage for a year
    pay_for_miles = total_miles_per_year * 2 # he gets charged $2 per mile driven
    
    # Calculating total bonus for a year
    # 1 month = 4 weeks
    bonus_per_year = (x3//4) * 150 # he gives his driver a $150 bonus per month
    
    # Calculating total pay for a year
    total_pay = pay_for_miles + bonus_per_year
    
    return total_pay