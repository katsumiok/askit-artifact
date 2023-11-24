# Recompilation count: 0
def there_are_x1_penguins_sunbathing_63f8b3(x1) -> int:
    # There are 'x1' penguins sunbathing in the snow. One-third of them jump in and swim in the ocean. Another one-third go inside the cave to eat their dinner. How many penguins are still left sunbathing?
    return int(x1 * (1 - 2/3)) #Two-thirds of the penguins have left, so one-third is still sunbathing. Calculation is 'x1' * (1 - 2/3) and converted to integer.