// Recompilation count: 0
export function antoineSFrenchOnionSoup_725caa({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Antoine's french onion soup recipe calls for 'x1' pounds of onions. He likes to double that amount. His soup serves 'x2' people. The onions are currently on sale for $2.00 a pound. He also needs 'x3' boxes of beef stock, that are also on sale for $2.00 a box.  What is the cost per serving? (Round to the nearest integer.)
    
    const costOfOnions = x1 * 2 * 2; // cost of onions = number of onions (2 times x1) times cost per pound 
    const costOfBeefStock = x3 * 2; // cost of beef stock = number of boxes times cost per box
    const totalCost = costOfOnions + costOfBeefStock; // total cost = cost of onions + cost of beef stock
    const costPerServing = Math.round(totalCost / x2); // cost per serving = total cost divided by the number of people, rounded to the nearest integer
    return costPerServing;
}
