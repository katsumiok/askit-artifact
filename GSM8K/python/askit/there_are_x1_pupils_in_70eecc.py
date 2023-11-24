# Recompilation count: 0
def there_are_x1_pupils_in_70eecc(x1, x2, x3, x4) -> int:
    # Total apple juice bottles teacher got from coupons.
    total_bottles = x2 * x3
    
    # Total apple juice bottles consumed by pupils.
    total_needed_for_pupils = x1 * x4
    
    # Number of bottles left for the teacher.
    left_for_teacher = total_bottles - total_needed_for_pupils
    
    return left_for_teacher