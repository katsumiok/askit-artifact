// Recompilation count: 0
export function valerieEarns_5000PerMonth_4fa447({}: {}): number {
    // Valerie earns $5000 per month
    let valerieSalary = 5000;

    // Valerie's brother earns twice as much as Valerie
    let brotherSalary = valerieSalary * 2;

    // Their mother earns twice their combined salary
    let motherSalary = (valerieSalary + brotherSalary) * 2;

    // Total amount they all have together
    let totalSalary = valerieSalary + brotherSalary + motherSalary;

    return totalSalary;
}
