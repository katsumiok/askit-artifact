# Recompilation count: 4
def the_number_of_songs_in_551cbe(x1, x2, x3) -> int:
    # The number of songs in a playlist is 300. If John has'x1'such playlists, and each song is'x2'hours long, how many hours will the'x3'playlists last in total?
    total_playlists = x1 * 300   # total songs in all playlists
    each_playlist_duration = 300 * x2  # duration of each playlist in hours
    total_hours = each_playlist_duration * x3  # total duration for x3 playlists 
    return total_hours