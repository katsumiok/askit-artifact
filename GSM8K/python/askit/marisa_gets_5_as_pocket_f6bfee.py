# Recompilation count: 2
def marisa_gets_5_as_pocket_f6bfee(x1, x2, x3) -> int:
    # Marisa gets $5 as pocket money every day from her parents. She buys 'x1' lollipops worth 'x2' cents each every day and saves the change in her piggy bank. How much money does she put in her piggy bank if she saves for 'x3' days?
    daily_savings = (500 - (x1 * x2))/100  # Convert pocket money and cost of lollipops to dollars and calculate the daily saving
    total_savings = daily_savings * x3  # Calculate the total saving by multiplying the daily saving and the number of days
    return total_savings