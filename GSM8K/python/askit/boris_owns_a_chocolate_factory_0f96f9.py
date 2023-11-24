# Recompilation count: 0
def boris_owns_a_chocolate_factory_0f96f9() -> int:
    # Boris owns a chocolate factory. He produces 50,000 bars of chocolate each month. Boris produces 8,000 bars of chocolate the first week. The second week, Boris only produces half as much as the first week. But, the third week, Boris produces three times as much as the first week. How much does he produce the fourth week?
    
    first_week_production = 8000
    second_week_production = first_week_production / 2
    third_week_production = first_week_production * 3

    total_for_three_weeks = first_week_production + second_week_production + third_week_production

    fourth_week_production = 50000 - total_for_three_weeks

    return int(fourth_week_production)