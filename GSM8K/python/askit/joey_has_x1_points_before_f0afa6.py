# Recompilation count: 0
def joey_has_x1_points_before_f0afa6(x1, x2, x3, x4) -> int:
    # Joey has'x1'points before his turn in Scrabble. He scores'x2'points. Then Marcy, who has'x3'points, scores'x4'points. By how many points is Joey now winning?
    joey_total = x1 + x2
    marcy_total = x3 + x4
    return joey_total - marcy_total