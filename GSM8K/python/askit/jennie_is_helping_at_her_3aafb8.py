# Recompilation count: 0
def jennie_is_helping_at_her_3aafb8(x1, x2) -> int:
    # Jennie stamps one-third of the letters needing stamps
    stamped_by_jennie = x1 // 3
    # The remaining letters now in the pile were already there when Jennie began
    return x2 - stamped_by_jennie