# Recompilation count: 0
def two_candidates_are_running_for_3ddad2() -> int:
    # Two candidates are running for class representative at Sarai's school. If the winner got 3/4 of the votes and the total number of students who voted in the class was 80, calculate the number of votes the loser got.
    total_votes = 80
    winner_votes = total_votes * 3 / 4
    loser_votes = total_votes - winner_votes
    return int(loser_votes)