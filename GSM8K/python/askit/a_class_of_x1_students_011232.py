# Recompilation count: 0
def a_class_of_x1_students_011232(x1, x2, x3) -> int:
    # A class of'x1'students has various hobbies.'x2'like to bake,'x3'like to play basketball, and the rest like to either play video games or play music. How many like to play video games if the number that like to play music is twice the number that prefer playing basketball?
    total_baking_and_basketball = x2 + x3
    music = x3 * 2
    video_games = x1 - total_baking_and_basketball - music
    return video_games