# Recompilation count: 0
def to_make_a_call_from_d059f9(x1) -> int:
    # To make a call from a payphone, you must pay $0.25 for each minute of your call. 
    # After 'x1' minutes, that price drops to $0.2 per minute. 
    # How much would a 36-minute call cost?
    if x1 >= 36:
        cost = x1 * 0.25
    else:
        remaining_mins = 36 - x1
        cost = x1 * 0.25 + remaining_mins * 0.20
    return cost