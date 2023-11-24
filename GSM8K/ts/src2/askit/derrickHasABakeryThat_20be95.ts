// Recompilation count: 0
export function derrickHasABakeryThat_20be95({ x1 }: {
    x1: number;
}): number {
    // Derrick has a bakery that makes 'x1' dozen doughnuts every day, selling at $2 per doughnut. 
    // How much money does Derrick make in June if he sells all the doughnuts?
    // 1 dozen has 12 doughnuts
    // There are 30 days in June
    
    let doughnutsPerDay = x1 * 12;  
    let totalDoughnutsInJune = doughnutsPerDay * 30; 
    let totalEarnedInJune = totalDoughnutsInJune * 2; // as each doughnut is $2

    return totalEarnedInJune;
}
