# Recompilation count: 0
def you_are_given_two_arrays_af724c(game: List[int], guess: List[int]) -> List[int]:
    result = []
    for i in range(len(game)):
        result.append(abs(game[i] - guess[i]))
    return result