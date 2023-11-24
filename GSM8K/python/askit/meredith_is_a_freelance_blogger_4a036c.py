# Recompilation count: 0
def meredith_is_a_freelance_blogger_4a036c(x1, x2) -> int:
    # Meredith is a freelance blogger who writes about health topics and submits to clients each day as her permanent job. 
    # A blog article takes an average of'x1'hours to research and write about. 
    # Last week, she wrote'x2'articles on Monday and  2/5 times more articles on Tuesday than on Monday. 
    # On Wednesday, she wrote twice the number of articles she wrote on Tuesday.
    # Calculate the total number of hours she spent writing articles in the three days.

    # Articles on Tuesday
    tuesday_articles = x2 + (2/5)*x2
    # Articles on Wednesday
    wednesday_articles = 2 * tuesday_articles
    # Total articles
    total_articles = x2 + tuesday_articles + wednesday_articles

    # Total hours spent writing
    total_hours = x1 * total_articles

    return total_hours