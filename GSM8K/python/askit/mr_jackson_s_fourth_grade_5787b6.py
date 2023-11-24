# Recompilation count: 1
def mr_jackson_s_fourth_grade_5787b6(x1, x2, x3) -> int:
    # Mr. Jackson’s fourth-grade class has'x1'students. He wants to give each student'x2'glue sticks. 
    # The glue sticks come in packs of 8. 
    # How many packs will Mr. Jackson need to buy so every student can have'x3'glue sticks, 
    # assuming he can only buy whole packs and he expects to have some extra glue sticks left over?

    total_glue_sticks = x1 * x3
    packs_needed = total_glue_sticks // 8
    
    # considering the fact that he may need to buy extra pack if there are remaining sticks
    if total_glue_sticks % 8 !=0:
        packs_needed += 1
    return packs_needed