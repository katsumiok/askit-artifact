# Recompilation count: 0
def mark_is_a_copy_editor_bcfd3a(x1, x2) -> int:
    # Mark is a copy-editor. He edits an equal number of sentences each week for two different publishers, who each pay him a different rate per sentence. Publisher B pays Mark twice what Publisher A pays. Mark edits a total number of'x1'sentences each week, and Publisher A pays him'x2'cents per sentence. How much does Mark make in a week, in cents?
    # Given 'x1' is total number of sentences, 'x2' is the rate per sentence for Publisher A.
    # The total income for Mark would be sum of payments from Publisher A and Publisher B.
    
    # Publisher A pays 'x2' cents per sentence
    total_A = (x1 / 2) * x2
    
    # Publisher B pays twice of what Publisher A pays
    total_B = (x1 / 2) * (x2 * 2)
    
    # Total income for Mark
    total_income = total_A + total_B
    
    return total_income