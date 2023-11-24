# Recompilation count: 0

def jessica_is_trying_to_figure_5176af() -> int:
    # Define minimum payments
    student_loan_min = 300
    credit_card_min = 200
    mortgage_min = 500

    # Calculate total minimum payment
    total_min = student_loan_min + credit_card_min + mortgage_min

    # Jessica wants to pay 50% more than the minimum
    jessica_monthly_payment = total_min + (total_min * 0.5)

    # Calculate how much Jessica pays in a year
    jessica_yearly_payment = jessica_monthly_payment * 12

    return int(jessica_yearly_payment)