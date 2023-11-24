# Recompilation count: 0
def brittany_s_quilted_comforter_has_f2996e(x1, x2, x3, x4) -> int:
    # Brittany's quilted comforter has many 1-foot by 1-foot colored squares. The comforter had'x1'red squares,'x2'more blue squares than red squares,'x3'more green squares than blue squares, and'x4'fewer white squares than green squares.  How many square feet is Brittany's comforter?
    blue_squares = x1 + x2
    green_squares = blue_squares + x3
    white_squares = green_squares - x4
    total_squares = x1 + blue_squares + green_squares + white_squares
    return total_squares