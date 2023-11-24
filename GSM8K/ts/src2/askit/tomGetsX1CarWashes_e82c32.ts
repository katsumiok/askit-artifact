// Recompilation count: 0
export function tomGetsX1CarWashes_e82c32({ x1 }: {
    x1: number;
}): number {
        //price of each car wash
        let carWashCost = 15;

        //Tom's monthly cost (x1 times the cost of a car wash)
        let monthlyCost = x1 * carWashCost;

        //Total cost in a year (12 times the monthly cost)
        return monthlyCost * 12;
    }
