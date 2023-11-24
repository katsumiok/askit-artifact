# Recompilation count: 0
def bethany_can_run_x1_laps_61b8d5(x1, x2, x3) -> int:
    # Bethany can run 'x1' laps on the track in one hour. Trey can run 'x2' more laps than Bethany. Shaelyn can run half as many laps as Trey. Quinn can run 'x3' fewer laps than Shaelyn. How many more laps can Bethany run compared to Quinn?
    Trey = x1 + x2
    Shaelyn = Trey / 2
    Quinn = Shaelyn - x3
    return x1 - Quinn