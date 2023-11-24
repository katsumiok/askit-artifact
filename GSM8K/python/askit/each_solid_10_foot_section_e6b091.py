# Recompilation count: 0
def each_solid_10_foot_section_e6b091(x1, x2) -> int:
    # Each solid 10-foot section of a redwood tree weighs'x1'pounds. Termites ate 30% of this redwood's wood.
    # if the redwood is'x2'feet tall, how much does it weigh?
    weight_before_termites = (x2 / 10) * x1
    weight_after_termites = weight_before_termites * 0.7
    return int(weight_after_termites)