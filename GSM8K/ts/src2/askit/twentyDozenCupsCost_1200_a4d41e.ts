// Recompilation count: 0
export function twentyDozenCupsCost_1200_a4d41e({}: {}): number {
      // Twenty dozen cups cost $1200 less than the total cost of half a dozen plates sold at $6000 each. Calculate the total cost of buying each cup.

      // Half a dozen is 6, so half a dozen plates cost:
      let halfDozenPlatesCost = 6000 * 6;

      // Twenty dozen cups cost $1200 less than the total cost of half dozen plates, so:
      let twentyDozenCupsCost = halfDozenPlatesCost - 1200;

      // There are 20 * 12 = 240 cups in twenty dozen, so the cost of each cup is:
      let costPerCup = twentyDozenCupsCost / 240;

      return costPerCup;
}
