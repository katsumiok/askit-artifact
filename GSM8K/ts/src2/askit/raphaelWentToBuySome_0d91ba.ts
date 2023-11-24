// Recompilation count: 0
export function raphaelWentToBuySome_0d91ba({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Raphael went to buy some school supplies. He bought 'x1' pens which cost $1.5 each, 'x2' notebooks which cost $4 each, and a rim of bond paper which cost $20. How much did Raphael spend on everything?
        let penCost = x1 * 1.5;
        let notebookCost = x2 * 4;
        let paperCost = 20;
        
        let totalCost = penCost + notebookCost + paperCost;
        return totalCost;
    }
