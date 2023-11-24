# Recompilation count: 0
def kenny_is_selling_his_pokemon_e3dd53() -> int:
    # Kenny starts with 'N' pokemon cards. He sells 2/3 of them for $1.5 each, which amounts to (2N/3)*1.5 $.
    # He needs $100 for the ticket and $50 as spending cash, totaling to $150.
    # Setting the equation (2N/3)*1.5 = 150, we can calculate the value of 'N' as follows:

    total_amount_needed = 150
    price_per_card = 1.5
    fraction_of_cards_sold = 2/3

    # number of cards Kenny started with
    N = total_amount_needed / (price_per_card * fraction_of_cards_sold)

    # We round off 'N' to the nearest int as the number of cards cannot be fractional.
    N = round(N)
    return N