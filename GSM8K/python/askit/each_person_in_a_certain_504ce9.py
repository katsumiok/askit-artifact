# Recompilation count: 0
def each_person_in_a_certain_504ce9(x1, x2) -> int:
    # Each person in a certain household consumes 0.2 kg of rice every meal. 
    # Supposing'x1'members of the household eat rice every lunch and dinner, how many weeks will a'x2'kg bag of rice last?
    
    # Each person eats 2 meals of rice daily, hence consumes 2*0.2 kg rice daily
    daily_rice_consumption = x1 * 2 * 0.2
    
    # Total days the bag of rice can last
    total_days = x2 / daily_rice_consumption
    
    # Convert days to weeks by dividing by 7 (since 1 week = 7 days)
    total_weeks = total_days // 7
    return total_weeks