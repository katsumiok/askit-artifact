# Recompilation count: 0
def britany_records_x1_4_minute_e34b49(x1, x2, x3) -> int:
    # Britany records'x1'4-minute TikTok videos each week. She spends'x2'hours a week writing amateur songs to sing on TikTok, and'x3'minutes six days a week doing her makeup before filming herself for TikTok. How much time does Britany spend on TikTok in a month with four weeks?
    total_video_time = x1 * 4 * 4  # total minutes spent on TikTok videos in a month
    total_song_writing_time = x2 * 60 * 4  # total minutes spent on writing songs in a month
    total_makeup_time = x3 * 6 * 4  # total minutes spent on doing makeup in a month
    total_time = total_video_time + total_song_writing_time + total_makeup_time  # total time spent on TikTok in a month
    return total_time