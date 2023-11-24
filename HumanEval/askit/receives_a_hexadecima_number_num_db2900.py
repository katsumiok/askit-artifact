# Recompilation count: 7
def receives_a_hexadecima_number_num_db2900(num) -> int:
    # Receives a hexadecimal number 'num' as a string and counts the number of hexadecimal digits that are primes"
    prime_hex = ['2', '3', '5', '7', 'D', 'B']
    count = 0
    for char in num:
        if char.upper() in prime_hex:
            count += 1
    return count