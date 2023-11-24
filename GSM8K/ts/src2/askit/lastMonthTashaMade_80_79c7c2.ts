// Recompilation count: 0
export function lastMonthTashaMade_80_79c7c2({}: {}): number {
    // Last month, Tasha made $80 from total income
    // if Tasha mowed Kamala's and Alba's lawn and paid $6 each time
    // it means Tasha mowed Joe's lawn 1 time, Kamala's 3 times and Alba's 5 times: total of 9 times
    let mowingIncome = 9 * 6; // Tasha made $54 from mowing lawns
    
    // find out how much she made from lemonade sales by subtracting her mowing income from her total income
    let lemonadeSales = 80 - mowingIncome;

    return lemonadeSales; // this will give us how much she made from lemonade sales
}
