# Recompilation count: 0
def the_basketball_team_went_to_0d60b5(x1) -> int:
    # Convert the one-pound steak into ounces (1 pound = 16 ounces)
    one_pound_steak_in_ounces = 16
    # The first player ate a 6-ounce steak
    first_player_meat_in_ounces = 6
    # The second player ate beef tips, containing 'x1' beef tips, each an ounce in size
    second_player_meat_in_ounces = x1 * 1  # because each beef tip is 1 ounce
    # The fourth and fifth players ordered vegetarian meals, so they are not included since they did not consume any meat
    # the total ounces of meat consumed by the team is the sum of the ounces consumed by the first, second and third player
    total_meat_in_ounces = first_player_meat_in_ounces + second_player_meat_in_ounces + one_pound_steak_in_ounces
    return total_meat_in_ounces