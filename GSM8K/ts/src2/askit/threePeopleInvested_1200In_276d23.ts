// Recompilation count: 0
export function threePeopleInvested_1200In_276d23({}: {}): number {
        // Three people invested $1200 in a joint savings account.  After Dylan's investment of 2/5 of the total amount, Frances invested 2/3 of the remaining amount.  Skyler's investment accounted for the rest. How much money was Skyler's investment?
    
    // Total amount invested
    let totalInvestment: number = 1200;

    // Dylan's investment
    let dylanInvestment: number = 2 / 5 * totalInvestment;

    // Remaining investment after Dylan's contribution
    let remainingInvestment1: number = totalInvestment - dylanInvestment;

    // Frances's investment
    let francesInvestment: number = 2 / 3 * remainingInvestment1;

    // Remaining investment after Frances's contribution
    let remainingInvestment2: number = remainingInvestment1 - francesInvestment;

    // Skyler's investment
    let skylerInvestment: number = remainingInvestment2;

    return skylerInvestment;
}
