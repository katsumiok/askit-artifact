# Recompilation count: 0
def carla_is_downloadin_a_x1_dfd8c9(x1, x2, x3) -> int:
    # Carla is downloading a'x1'GB file. Normally she can download'x2'GB/minute, but 40% of the way through the download, Windows forces a restart to install updates, which takes'x3'minutes. Then Carla has to restart the download from the beginning. How load does it take to download the file? 
    time_to_reach_40_percent = (0.4 * x1) / x2 # time it takes to download 40% of the file
    total_time = time_to_reach_40_percent + x3 + (x1 / x2) # time to restart and download the entire file
    return total_time