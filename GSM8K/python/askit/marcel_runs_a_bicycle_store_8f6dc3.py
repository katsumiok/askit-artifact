# Recompilation count: 0
def marcel_runs_a_bicycle_store_8f6dc3(x1) -> int:
    # Marcel runs a bicycle store. His main products are three types of bikes: MTB, BMX, and Trekking. 
    # The price of one MTB is $500, BMX is half the price of an MTB, and a Trekking bike is $450. 
    # In one month, Marcel sold a total of'x1'bikes among the types listed. Half of them were Trekking bikes, 
    # and 15% were BMX bikes. The rest of the sold bikes were MTB type. 
    # How much did Marcel earn from selling bicycles during that month?

    MTB_price = 500
    BMX_price = MTB_price / 2
    Trekking_price = 450

    Trekking_count = x1 * 0.5
    BMX_count = x1 * 0.15
    MTB_count = x1 - (Trekking_count + BMX_count)

    total_income = (MTB_price * MTB_count) + (BMX_price * BMX_count) + (Trekking_price * Trekking_count)

    return total_income