// Recompilation count: 0
export function jasonWasToldHeCould_d4b407({ x1 }: { x1: number }): number {
    // Define the earnings for each task
    const laundryEarnings = 3.00;
    const roomCleaningEarnings = 1.50;
    const trashEarnings = 0.75;
    const dishwasherEarnings = 0.50;

    // Define the number of times each task was done in two weeks
    const laundryTimes = 1;
    const roomCleaningTimes = 1;
    const trashTimes = 2;
    const dishwasherTimes = x1;

    // Calculate and return the total earnings
    const totalEarnings = (laundryEarnings * laundryTimes) + (roomCleaningEarnings * roomCleaningTimes) + (trashEarnings * trashTimes) + (dishwasherEarnings * dishwasherTimes);
    return totalEarnings;
}
