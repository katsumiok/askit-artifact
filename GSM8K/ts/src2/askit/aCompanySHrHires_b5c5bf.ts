// Recompilation count: 6
export function aCompanySHrHires_b5c5bf({ x1 }: { x1: number; }): number {
    // calculate the total amount of money the company pays to its employees after three months

    // initial number of employees
    let initialEmployees = 200;
    
    // salary per employee
    let salaryPerEmployee = 4000;
    
    // total salary payments after three months
    let totalSalary = 0;
    
    for(let i = 0; i < 3; i++) {
        // for each month, addition of 'x1' employees
        initialEmployees += x1;
        
        // calculating the total salary for the month
        totalSalary += (initialEmployees * salaryPerEmployee);
    }
    
    return totalSalary;
}
