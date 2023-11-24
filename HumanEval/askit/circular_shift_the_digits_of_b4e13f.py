# Recompilation count: 1
def circular_shift_the_digits_of_b4e13f(x: int, shift: int) -> str:
    x_str = str(x)
    if shift > len(x_str):
        return x_str[::-1]
    else:
        return x_str[-shift:] + x_str[:-shift]