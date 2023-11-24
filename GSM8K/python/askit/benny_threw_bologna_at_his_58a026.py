# Recompilation count: 0
def benny_threw_bologna_at_his_58a026(x1) -> int:
    # Benny threw bologna at his balloons.  He threw two pieces of bologna at each red balloon and three pieces of bologna at each yellow balloon.  If Benny threw 'x1' pieces of bologna at a bundle of red and yellow balloons, and twenty of the balloons were red, then how many of the balloons in the bundle were yellow?
    bologna_thrown_at_red_balloons = 20 * 2  # 20 red balloons, 2 pieces each
    remaining_bologna = x1 - bologna_thrown_at_red_balloons  # Remaining bologna thrown at yellow balloons
    yellow_balloons = remaining_bologna // 3  # Each yellow balloon got 3 pieces
    return yellow_balloons