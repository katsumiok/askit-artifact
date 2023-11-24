// Recompilation count: 0
export function ariadneHasAShopSelling_7038bb({}: {}): number {
    // Given:
    // sales from red hats = $400
    // it's half the total amount she earned from selling green hats
    // so, sales from green hats = 2 * sales from red hats = 2 * 400 = $800
    let firstMonthSales = 400 + 800;

    // 2nd month sales were 3/4 of the first month
    let secondMonthSales = 3 / 4 * firstMonthSales;

    // total income for 2 months
    let totalSales = firstMonthSales + secondMonthSales;
    return totalSales;
}
