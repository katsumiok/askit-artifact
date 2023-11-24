// Recompilation count: 0
export function nickIsChoosingBetweenTwo_b0ef6e({ x1 }: { x1: number }): number {
    // Job A calculations
    const hourlyRateA = 15;
    const taxRateA = 0.20;
    const salaryA = hourlyRateA * x1;
    const netSalaryA = salaryA * (1 - taxRateA);

    // Job B calculations
    const salaryB = 42000;
    const propertyTaxB = 6000;
    const taxRateB = 0.10;
    const netSalaryB = (salaryB - propertyTaxB) * (1 - taxRateB);

    // Nick will choose the job with the higher net salary.
    const difference = Math.abs(netSalaryA - netSalaryB);
    return difference;
}
