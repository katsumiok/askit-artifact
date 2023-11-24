// Recompilation count: 0
export function ceciliaJustBoughtANew_eec68b({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Calculate total number of cups required for the first 'x2' days.
    let firstFewDaysCups = x1 * x2;

    // Calculate total number of days for the rest of the year after 'x2' days.
    let restOfTheYearDays = 365 - x2;

    // Calculate total cups required for the rest of the year after 'x2' days.
    let restOfTheYearCups = x3 * restOfTheYearDays;

    // Add the two totals together to get the total cups required for the year.
    let totalCupsForTheYear = firstFewDaysCups + restOfTheYearCups;

    // Divide total by cups per bag to get required number of bags 
    // Math.ceil is used here to ensure number of bags is rounded up (can't have part of a bag)
    let totalBags = Math.ceil(totalCupsForTheYear / x4);

    return totalBags;
}
