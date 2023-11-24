# Recompilation count: 0
def suzie_loves_to_chew_fruit_da28b6() -> int:
    # Total amount Suzie paid
    total_cost = 7

    # Cost of grape gum
    grape_gum_cost = 2

    # Cost of green apple gum, which is half the grape gum cost
    apple_gum_cost = grape_gum_cost / 2

    # Subtract the grape and apple gum costs from the total to get the cost of the strawberry gums
    strawberry_gum_cost = total_cost - grape_gum_cost - apple_gum_cost

    # Since she got two packs of strawberry gum, divide the total strawberry gum cost by 2 to find the cost per pack
    strawberry_gum_cost_per_pack = strawberry_gum_cost / 2

    # Return the cost per pack of strawberry gum, rounded to the nearest dollar since the problem is dealing with dollars
    return round(strawberry_gum_cost_per_pack)