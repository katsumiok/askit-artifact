# Recompilation count: 1
def takes_a_value_string_value_60a0aa(value: str) -> int:
    # Convert the string number to float and round it to the closest integer
    value_float = float(value)
    if value_float > 0: 
        return int(value_float + 0.5)
    else:
        return int(value_float - 0.5)