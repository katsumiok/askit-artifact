# Recompilation count: 0
def madeline_and_her_roommate_keenan_ff9fb8() -> int:
    # Madeline and her roommate, Keenan, share the cost of groceries. In total, they spend about $400 per month. 
    # In a four-week month, how many dollars does Keenan spend per week if Madeline pays 60% of the cost?
    monthly_total = 400
    keenan_monthly = monthly_total * 0.4  # since Madeline pays 60%, Keenan pays the remaining 40%
    keenan_weekly = keenan_monthly / 4  # as month contain 4 weeks
    return int(keenan_weekly)