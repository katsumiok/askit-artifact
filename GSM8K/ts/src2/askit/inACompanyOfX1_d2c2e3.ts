// Recompilation count: 0
export function inACompanyOfX1_d2c2e3({ x1 }: { x1: number; }): number {
    // In a company of 'x1' employees, 20% of the employees are management.  
    // Out of this 20%, only 30% oversee the entire company.  
    // How many employees oversee the company?
    const management = x1 * 0.2;
    const overseeCompany = management * 0.3;
    return overseeCompany;
}
