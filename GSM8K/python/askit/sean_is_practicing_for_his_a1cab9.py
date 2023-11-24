# Recompilation count: 0
def sean_is_practicing_for_his_a1cab9(x1) -> int:
    # Sean is practicing for his role in a theater production. He has to memorize his 
    # lines for two scenes and the lyrics to one solo song. His solo song has'x1'lines 
    # in the lyrics. The first scene has twice the number of lines, but only a third of 
    # them are his lines. The second scene has six more lines than the song, and four-fifths 
    # of them are his. How many lines does Sean have to memorize?
    
    # All lines of solo song
    solo_song_lines = x1
    
    # The first scene has twice the number of lines and Sean's lines are one third of it.
    first_scene_lines = (2 * x1) / 3
    
    # The second scene has six more lines than the song, four-fifths of them are Sean's
    second_scene_lines = (x1 + 6) * (4/5)
    
    # total lines are the sum all of the above
    total = int(solo_song_lines + first_scene_lines + second_scene_lines)
    
    
    return total