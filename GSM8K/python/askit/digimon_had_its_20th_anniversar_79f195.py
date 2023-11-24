# Recompilation count: 1
def digimon_had_its_20th_anniversar_79f195(x1) -> int:
    # Digimon had its 20th anniversary.  When it came out John was twice as old as Jim.  If John is'x1'now how old is Jim?
    # If John is x1 now, he was x1-20 years old when Digimon came out
    # At that time, John was twice as old as Jim, so Jim was half as old as John
    # So, Jim's age at that time would be (x1-20)/2
    # Now, 20 years later, Jim would be (x1-20)/2 + 20 years old.
    return (x1-20)//2 + 20