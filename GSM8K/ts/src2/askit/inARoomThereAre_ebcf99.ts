// Recompilation count: 0
export function inARoomThereAre_ebcf99({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // In a room, there are various toys: 'x1' red cars, 'x2' action figures, and a doll. The doll cost as much as 'x3' action figures and one red car cost $4. How much are all toys worth, of an action figure costs $5?
        const redCarsCost: number = x1 * 4; // cost of all red cars
        const actionFiguresCost: number = x2 * 5; // cost of all action figures
        const dollCost: number = x3 * 5; // cost of the doll

        return redCarsCost + actionFiguresCost + dollCost; // total cost of all toys
    }
