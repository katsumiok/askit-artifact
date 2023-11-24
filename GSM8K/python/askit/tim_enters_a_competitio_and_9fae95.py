# Recompilation count: 0
def tim_enters_a_competitio_and_9fae95(x1, x2, x3) -> int:
    # calculate the volume of the jar
    volume_of_jar = x1 * x2 * x3  # in cubic inches

    # calculate the total number of jelly beans the jar can accommodate
    num_of_jelly_beans = volume_of_jar * 0.8 / 0.15  # 80% efficiency in packing and each jelly bean is 0.15 cubic inches

    # calculate the number of red jelly beans Tim guesses
    guessed_red_jelly_beans = num_of_jelly_beans * 0.3  # he estimates 30% of the jelly beans are red

    # calculate how far off was his guess from the true number (900)
    difference = abs(guessed_red_jelly_beans - 900)

    return int(difference)