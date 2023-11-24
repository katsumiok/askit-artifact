# Recompilation count: 0
def denise_and_daniel_are_reading_8ef5a3(x1, x2, x3) -> int:
    # Denise and Daniel are reading the same book. Yesterday, Denise read'x1'pages while Daniel read'x2'pages. Today, Denise read'x3'more than as many pages as what Daniel read yesterday, while Daniel was not able to read any pages today. How many more pages did Denise read more than Daniel?
    denise_total_pages = x1 + x2 + x3
    daniel_total_pages = x2
    return denise_total_pages - daniel_total_pages