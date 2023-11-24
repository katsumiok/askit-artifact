# Recompilation count: 0
def while_working_at_the_restaurant_ae0458() -> int:
    # While working at the restaurant, each of the forty customers who came into the restaurant gave Rafaela a $20 tip. Julieta received 10% less money in tips than Rafaela. How much money did Julieta and Rafaela receive as tips altogether?

    # Rafaela received 40 customers * $20 each in tips
    rafaela_tips = 40 * 20
    # Julieta received 10% less money in tips than Rafaela 
    julieta_tips = rafaela_tips - (rafaela_tips * 0.1)

    # Combine Rafaela's and Julieta's tips
    total_tips = rafaela_tips + julieta_tips

    return total_tips