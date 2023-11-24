# Recompilation count: 0
def there_are_five_phones_on_1cf1bb() -> int:
    # There are five phones on a phone plan. The main phone costs twice as much as each additional phone. If the main phone plan costs $20, how much does the whole phone plan cost?
    main_phone = 20
    additional_phone = main_phone / 2
    total_cost = main_phone + (additional_phone * 4)
    return int(total_cost)