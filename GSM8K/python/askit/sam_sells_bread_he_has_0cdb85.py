# Recompilation count: 0
def sam_sells_bread_he_has_0cdb85(x1, x2, x3, x4, x5) -> int:
    # Sam sells bread. He has a target of selling'x1'crates of bread in a week. One week he was closed on Monday and Friday. Over the weekend he sold'x2'crates. On Tuesday he sold'x3'crates, on Wednesday'x4'crates, and Thursday'x5'crates. By how many crates was Sam off from his target for the week?
    total_sold = x2 + x3 + x4 + x5
    return x1 - total_sold