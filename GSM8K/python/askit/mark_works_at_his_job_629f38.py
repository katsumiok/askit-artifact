# Recompilation count: 0
def mark_works_at_his_job_629f38(x1, x2) -> int:
    # Mark works at his job for'x1'hours a day for'x2'days a week.  He used to make $10 an hour but they raised his pay by $2 per hour.  How much does he make a week?
    new_hourly_rate = 10 + 2  # Mark's new hourly rate
    return new_hourly_rate * x1 * x2 