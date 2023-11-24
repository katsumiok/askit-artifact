# Recompilation count: 0
def paul_needs_x1_cupcakes_for_ae578b(x1, x2, x3) -> int:
    # Paul needs'x1'cupcakes for a birthday party happening on Saturday. He already has'x2'chocolate cupcakes and'x3'toffee cupcakes. How many more cupcakes should Paul buy?
    total_cupcakes = x2 + x3
    additional_cupcakes = x1 - total_cupcakes
    if additional_cupcakes > 0:
        return additional_cupcakes
    else:
        return 0