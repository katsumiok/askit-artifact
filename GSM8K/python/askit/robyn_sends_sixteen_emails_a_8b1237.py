# Recompilation count: 0
def robyn_sends_sixteen_emails_a_8b1237() -> int:
    total_emails = 16
    work_emails = 7
    remainder = total_emails - work_emails 
    family_emails = 2 / 3 * remainder
    boyfriend_emails = 1 / 3 * (remainder - family_emails)
    return int(boyfriend_emails)