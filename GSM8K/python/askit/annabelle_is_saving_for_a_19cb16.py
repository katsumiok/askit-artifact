# Recompilation count: 0
def annabelle_is_saving_for_a_19cb16(x1, x2) -> int:
    # Annabelle is saving for a phone that costs $400. She already has $80 in her savings. 
    # Her first job, where she earns $10 per hour, pays her for 'x1' hours of work. 
    # She is also paid for 'x2' hours of work at her second job, where she earns $5 an hour. 
    # In dollars, how much money does Annabelle still need to save?

    total_cost = 400
    initial_savings = 80
    job_1_earnings = x1 * 10
    job_2_earnings = x2 * 5

    total_earnings = initial_savings + job_1_earnings + job_2_earnings
    amount_to_save = total_cost - total_earnings

    return amount_to_save