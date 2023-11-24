# Recompilation count: 0
def in_a_race_with_x1_144f4f(x1, x2) -> int:
    # In a race with 'x1' Asians, 'x2' were Japanese, and the rest were Chinese. 
    # If the number of boys on the Chinese team was 60, how many girls were on the Chinese team?
    # Assuming 'x1' is the total number of participants (Asians)
    # And 'x2' is the number of Japanese participants
    # The remaining x1 - x2 participants are the Chinese.
    # If boys in Chinese team are 60, the rest of the participants in the Chinese team have to be girls.
    total_chinese = x1 - x2
    girls_on_chinese_team = total_chinese - 60
    return girls_on_chinese_team