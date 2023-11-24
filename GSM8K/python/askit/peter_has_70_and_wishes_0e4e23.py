# Recompilation count: 0
def peter_has_70_and_wishes_0e4e23() -> int:
    # Peter has $70 and wishes to spend an equal amount each day for one week. From Sunday through Wednesday, he spent his money on wooden action figures which cost $5 each. For the rest of the week, he will buy plastic action figures which cost $2 each. How many total action figures will he have by the end of the week?
    total_spendings = 70
    daily_spendings = total_spendings / 7  # Peter spends the same amount each day

    # Price of action figures
    wooden_action_figure_price = 5
    plastic_action_figure_price = 2

    # Four days - Sunday through Wednesday - Peter buys wooden action figures
    wooden_action_figures_bought = int(daily_spendings / wooden_action_figure_price) * 4

    # For the rest of the week - three days - Peter buys plastic action figures
    plastic_action_figures_bought = int(daily_spendings / plastic_action_figure_price) * 3

    return wooden_action_figures_bought + plastic_action_figures_bought