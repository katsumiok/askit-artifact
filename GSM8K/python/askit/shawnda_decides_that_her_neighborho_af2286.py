# Recompilation count: 0
def shawnda_decides_that_her_neighborho_af2286(x1, x2, x3) -> int:
    # Shawnda decides that her neighborhood kids could really use a bike inflation service. She decides the best way to charge is by the tire. Each tire costs'x1'cents to inflate. On the first day,'x2'people on bicycles came by to get both tires inflated.'x3'people came by to get all their tricycle tires inflated. Finally, one person actually came by on a unicycle. How many dollars did she make that day?
    return ((x2 * 2 * x1) + (x3 * 3 * x1) + (1 * x1)) // 100  # Return dollars