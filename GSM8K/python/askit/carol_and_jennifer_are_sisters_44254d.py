# Recompilation count: 0
def carol_and_jennifer_are_sisters_44254d(x1, x2) -> int:
    # Carol and Jennifer are sisters from Los Angeles who love collecting signatures from celebrities. During their summer break from school, the sisters spend every afternoon collecting signatures. After five weeks, Carol and Jennifer compare their autograph books, counting up the number of signatures each sister has collected. Carol has'x1'signatures in her book, and Jennifer has 44. The sisters have three more weeks of summer vacation, and they decide they want to reach'x2'signatures between them by the end of the summer. How many signatures do the sisters need to collect to reach their goal?
    
    signatures_collected = x1 + 44   # Total signatures collected so far
    signatures_needed = x2 - signatures_collected  # Signatures needed to reach goal
    return signatures_needed