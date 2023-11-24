// Recompilation count: 2
export function aCompanyPaysEachOf_0f24e8({ x1 }: {
    x1: number;
}): number {
    
    let initialSalary: number = 600 * 12;  // annual salary
    let increase: number = 0.10; //10% increase every year after 5 years
    
    // check if sylvie has stayed in the company for five years or more
    if(x1 >= 5) {
        // Calculate the years of service after 5 years
        let yearsAfterFive: number = x1 - 5;
        
        // Calculate the salary increase for the years of service after 5 years
        let totalIncrease: number = yearsAfterFive * increase * initialSalary;
        
        // calculate sylvie's current annual salary
        let currentSalary: number = initialSalary + totalIncrease;
        
        // calculate sylvie's annual salary after next 3 years of service
        let futureSalary: number = currentSalary + (3 * increase * currentSalary);
        
        return futureSalary;
    }
    
    // if sylvie has stayed less than five years, no increase in her salary
    else {
        return initialSalary;
    }
}
