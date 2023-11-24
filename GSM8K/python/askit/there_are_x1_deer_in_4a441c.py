# Recompilation count: 0
def there_are_x1_deer_in_4a441c(x1, x2, x3, x4, x5) -> int:
    # There are'x1'deer in a field.'x2'percent of them are bucks.'x3'percent of the bucks are'x4'points.  How many'x5'point bucks are there?
    total_bucks = x1 * (x2/100)
    x4_point_bucks = total_bucks * (x3/100)
    x5_point_bucks = x4_point_bucks if x4 == x5 else 0 # assuming that 'x4 points' mean 'x4 point bucks'
    return int(x5_point_bucks)