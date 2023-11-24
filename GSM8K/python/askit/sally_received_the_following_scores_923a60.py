# Recompilation count: 0
def sally_received_the_following_scores_923a60() -> int:
    # Sally received the following scores on her math quizzes: 50, 80, 80, 60, 40, 90, 100, 70, and 60. Find her mean score.
    scores = [50, 80, 80, 60, 40, 90, 100, 70, 60] # The scores Sally received
    total = sum(scores) # Sum up all the scores
    mean = total / len(scores) # Calculate the mean score
    return round(mean) # Return the mean score, rounded to the nearest integer