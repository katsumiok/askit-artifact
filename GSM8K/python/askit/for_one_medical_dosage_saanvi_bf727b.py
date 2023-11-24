# Recompilation count: 0
def for_one_medical_dosage_saanvi_bf727b(x1, x2, x3) -> int:
    # For one medical dosage, Saanvi had to combine'x1'mL of one medicine with'x2'times that amount of the second medicine. How many mL of medicine would be in'x3'doses?
    dosage_per_dose = x1 + x1 * x2
    total_dosage = dosage_per_dose * x3
    return total_dosage