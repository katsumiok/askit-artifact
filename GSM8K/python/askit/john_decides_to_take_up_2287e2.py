# Recompilation count: 0
def john_decides_to_take_up_2287e2(x1, x2, x3) -> int:
    # John decides to take up an odd hobby of speed talking.  His normally speaking speed is'x1'WPM.  After training his speed is 2.5 times faster than his starting speed.
    # How long would it take him to speak'x2'pages if each page has'x3'words per page?
    words_per_minute_after_training = x1 * 2.5
    total_words = x2 * x3
    minutes_required = total_words / words_per_minute_after_training
    return minutes_required