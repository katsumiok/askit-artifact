# Recompilation count: 0
def marcus_is_trying_to_decide_4bc317() -> int:
    # Assign individual percentages to different scenarios
    chance_of_substitute = 50
    chance_of_extension = 40
    chance_of_personal_extension = 20

    # Calculate the chance that none of the above scenarios happen, i.e., Marcus has to turn in his homework
    chance_of_doing_homework = (100 - chance_of_substitute)*(100 - chance_of_extension)*(100 - chance_of_personal_extension) / 10000
    
    return int(chance_of_doing_homework) 