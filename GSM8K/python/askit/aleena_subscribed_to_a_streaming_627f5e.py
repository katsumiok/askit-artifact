# Recompilation count: 0
def aleena_subscribed_to_a_streaming_627f5e() -> int:
    # Aleena subscribed to a streaming service that charges her $140 per month. If the streaming company charged her the initial amount for the first half of the year and then charged her 10% less money on the other half of the year, calculate the total amount she had paid for the streaming service by the end of the year.
    half_year = 6
    full_price = 140
    diminished_price = full_price * 0.9 # 10% less means 90% of the initial price
    total_paid = (full_price * half_year) + (diminished_price * half_year)
    return round(total_paid)