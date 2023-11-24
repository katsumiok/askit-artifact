# Recompilation count: 0
def carla_just_gave_birth_to_f43302() -> int:
    # Carla just gave birth to identical octuplets.
    total_babies = 8
    
    # She dresses 3/4 of them in purple and 1/4 in blue.
    purple_babies = total_babies * 3/4 # 6
    blue_babies = total_babies * 1/4 # 2

    # If all the blue-wearers and 1/3 of the purple wearers also wear bows
    purple_with_bows = purple_babies * 1/3 # 2
    blue_with_bows = blue_babies # 2

    # what is the percentage chance a baby wearing a bow is wearing purple?
    babies_with_bows = purple_with_bows + blue_with_bows # 4
    percentage_purple_with_bows = (purple_with_bows / babies_with_bows) * 100 

    return int(percentage_purple_with_bows)