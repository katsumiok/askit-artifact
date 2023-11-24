# Recompilation count: 0
def there_are_forty_apples_in_a9ee69() -> int:
    # There are forty apples in one box. Uncle Franky ordered two boxes of apples. He is planning to pack the apples with eight apples in one pack. How many packs of apples can he make with the two boxes of apples?
    apples_in_one_box = 40
    number_of_boxes = 2
    apples_in_one_pack = 8
    total_apples = apples_in_one_box * number_of_boxes
    total_packs = total_apples // apples_in_one_pack
    return total_packs