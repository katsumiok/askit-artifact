# Recompilation count: 0
def a_stickler_for_health_octavia_b64dc0(x1, x2) -> int:
    # The daily recommendation is x2 cups, Octavia consumes half of it i.e. x2/2. Juan drinks 'x1' times of it.
    current_intake = (x2/2)*x1
    # The reduction needed is the difference between his current intake and the recommended intake
    reduction = current_intake - x2
    return int(reduction)