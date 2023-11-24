# Recompilation count: 0
def frankie_watches_tv_after_he_2f2c1b(x1) -> int:
    # Frankie watches TV after he finishes his homework every night. 
    # On Monday and Tuesday, he watched a 1-hour episode of his favorite show each night. 
    # On Wednesday, he watched a few episodes of a 30-minute show. 
    # On Thursday, he finished homework early and watched a 1-hour episode and a 30-minute show. 
    # On Friday, he got to stay up late for the weekend, so he watched two 1-hour episodes.
    # If he watched 'x1' hours of TV in all, how many 30-minute episodes did he watch on Wednesday?

    # The total watch time for Monday, Tuesday, Thursday, and Friday.
    known_watch_time = 1 + 1 + 1.5 + 2

    # The total watch time for Wednesday is: total watch time - known watch time.
    wednesday_watch_time = x1 - known_watch_time

    # There will be 2 episodes in 1 hour because each episode is 30 minutes.
    # Therefore, the total number of 30-minute episodes for Wednesday is wednesday_watch_time * 2.
    wednesday_episodes = wednesday_watch_time * 2

    return int(wednesday_episodes)