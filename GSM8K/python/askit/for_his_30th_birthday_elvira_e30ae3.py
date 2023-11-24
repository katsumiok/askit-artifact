# Recompilation count: 0
def for_his_30th_birthday_elvira_e30ae3() -> int:
    # For his 30th birthday, Elvira chose a new computer with many accessories as a gift. She has a budget of €1500 donated by her whole family and thinks that she will be able to keep a little money to afford a garment. She goes to a computer store and chooses a machine that costs €1090 with a screen, keyboard and mouse. She also takes a scanner for €157, a CD burner worth €74 and a printer for €102. How much money will she have left for her clothing?
    budget = 1500
    cost_of_computer = 1090
    cost_of_scanner = 157
    cost_of_burner = 74
    cost_of_printer = 102
    
    total_spent = cost_of_computer + cost_of_scanner + cost_of_burner + cost_of_printer
    money_left = budget - total_spent 
    
    return money_left