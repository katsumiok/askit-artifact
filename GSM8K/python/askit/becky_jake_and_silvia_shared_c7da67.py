# Recompilation count: 0
def becky_jake_and_silvia_shared_c7da67(x1, x2, x3, x4) -> int:
    # Becky, Jake, and Silvia shared 'x1' pizzas. Each pizza had 'x2' slices. Becky ate 'x3' more slices than Jake did. Silvia ate twice as many slices than Jake did. If Becky ate 'x4' slices, how many total slices did they eat?
    total_slices = x1 * x2
    becky_slices = x4
    jake_slices = becky_slices - x3
    silvia_slices = jake_slices * 2
    return becky_slices + jake_slices + silvia_slices