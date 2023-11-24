# Recompilation count: 0
def there_are_x1_castles_in_2d8859(x1, x2) -> int:
    # There are'x1'castles in Scotland.'x2'percent of them are ruins, and half of the ruined castles are unmanned.  How many unmanned ruined castles are there in Scotland?
    ruined_castles = x1 * (x2/100)
    unmanned_ruined = ruined_castles / 2
    return int(unmanned_ruined)