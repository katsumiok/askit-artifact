// Recompilation count: 0
export function theCaretakerOfTheDocks_e4bda3({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // The caretaker of the docks needs to buy some new line. He wants 'x1' feet of line for every foot of dock. Right now, there is 'x2' feet of dock, and he has 'x3' feet of new line. How many feet of line does he need to buy in total?
        
        // total amount of line needed is number of line per foot times total feet of dock
        const totalLineNeeded = x1 * x2;

        // line he has to buy is total line needed minus new line he already has
        const lineToBuy = totalLineNeeded - x3;

        return lineToBuy;
    }
