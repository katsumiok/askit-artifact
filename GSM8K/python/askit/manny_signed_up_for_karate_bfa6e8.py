# Recompilation count: 0
def manny_signed_up_for_karate_bfa6e8(x1) -> int:
    # Manny signed up for Karate classes for $60. His parents tell him that if his classes end up costing more than $10 per class, then they won't sign him up again. If there are'x1'total classes, how many can he miss before they don't sign him up again?

    total_cost = 60
    cost_per_class_limit = 10

    max_classes_manny_can_attend = total_cost / cost_per_class_limit

    # If Manny misses classes more than 'max_classes_manny_can_attend', his classes will end up costing more than $10 per class
    classes_manny_can_miss = x1 - max_classes_manny_can_attend

    return int(classes_manny_can_miss)