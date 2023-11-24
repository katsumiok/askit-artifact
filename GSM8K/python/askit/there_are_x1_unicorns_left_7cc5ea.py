# Recompilation count: 0
def there_are_x1_unicorns_left_7cc5ea(x1) -> int:
    # 'x1' unicorns left in the world.  One third of them are in the Scottish Highlands.  Two thirds of the Scottish unicorns are female.  
    # How many female Scottish unicorns are there?
    scottish_unicorns = x1 // 3
    female_scottish_unicorns = 2 * scottish_unicorns // 3
    return female_scottish_unicorns