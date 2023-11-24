# Recompilation count: 0
def change_numerical_base_of_input_bac07f(x: int, base: int) -> str:
    def baseConverter(n, b):
        conversion = "0123456789ABCDEF"
        if n < b:
            return conversion[n]
        else:
            return baseConverter(n//b, b) + conversion[n%b]
    return baseConverter(x, base)