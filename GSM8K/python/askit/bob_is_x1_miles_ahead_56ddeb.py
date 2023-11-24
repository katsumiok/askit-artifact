# Recompilation count: 0
def bob_is_x1_miles_ahead_56ddeb(x1, x2, x3) -> int:
    # Bob is'x1'miles ahead of Tom, driving'x2'miles per hour. Tom is driving'x3'miles per hour. How long will it take Tom to catch up with Bob?
    if x3 <= x2:
        return "Tom will never catch up to Bob!"
    else:
        return x1 / (x3 - x2)