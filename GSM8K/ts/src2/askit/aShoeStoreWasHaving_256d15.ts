// Recompilation count: 0
export function aShoeStoreWasHaving_256d15({ x1 }: {
    x1: number;
}): number { 
    // On Friday the store sold 'x1' pairs of tennis shoes.
    let fridaySales = x1;

    // The next day they sold double that number of shoes.
    let saturdaySales = x1 * 2;

    // On the last day of the sale they sold one-half the amount that they did the day before, 
    // but six people returned their pairs because they didn't fit.
    let sundaySales = (saturdaySales / 2) - 6;

    // How many tennis shoes were sold by the end of the sale?
    let totalSales = fridaySales + saturdaySales + sundaySales;

    return totalSales;
}
