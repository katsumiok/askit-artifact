// Recompilation count: 0
export function brendanHasABagOf_94d986({ x1 }: { x1: number; }): number {
    // Half of the marbles dropped
    let marbles = x1 / 2;
    
    // He found 3
    marbles += 3;
    
    // One of them was a bead
    marbles -= 1;

    // Return the final count
    return marbles;
}
