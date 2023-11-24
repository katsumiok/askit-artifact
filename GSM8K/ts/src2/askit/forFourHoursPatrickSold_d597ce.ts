// Recompilation count: 0
export function forFourHoursPatrickSold_d597ce({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    
    if (x3 <= 4) {
        // If Patrick was selling lemonade for 4 hours or less, he sold at the rate of x1 cups per hour
        return 0.50 * x1 * x3;
    } else if (x3 <= 6) {
        // If Patrick was selling lemonade for more than 4 hours but less than or equal to 6 hours, 
        // he sold at the rate of x1 cups per hour for the first 4 hours and x2 cups per hour for the remaining time
        return 0.50 * x1 * 4 + 0.60 * x2 * (x3 - 4);
    } else {
        // If Patrick was selling lemonade for more than 6 hours, 
        // he sold at the rate of x1 cups per hour for the first 4 hours and 
        // at the rate of x2 cups per hour for the remaining time
        return 0.50 * x1 * 4 + 0.60 * x2 * (x3 - 4);
    }

}
