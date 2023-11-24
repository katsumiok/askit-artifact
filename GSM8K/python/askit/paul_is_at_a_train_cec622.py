# Recompilation count: 0
def paul_is_at_a_train_cec622(x1, x2, x3) -> int:
    # Total duration of the first train at the station
    train1 = x1 + x2

    # The second train arrives half an hour after the first train leaves, and stays quarter the time of the first train
    train2 = 30 + (x2 / 4)

    # The third train arrives an hour after the second train leaves and leaves immediately
    train3 = 60 

    # The fourth train arrives x3 minutes after the third leaves
    train4 = x3

    # Total time Paul has to wait is the sum of times of all trains
    total_time = train1 + train2 + train3 + train4

    return total_time