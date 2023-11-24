// Recompilation count: 0
export function henryNeedsToAssembleSome_caf65d({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Henry needs to assemble some toys, specifically 'x1' cars and 'x2' motorcycles. 
    // Henry knows that to assemble all the toys he will need 'x3' wheels for each car 
    // and 'x4' wheels for each motorcycle. 
    // How many wheels will be left if he has a box with 'x5' wheels in it?

    // Calculate total wheels needed
    const totalWheelsNeeded = (x1 * x3) + (x2 * x4);

    // Number of wheels left in the box
    const wheelsLeft = x5 - totalWheelsNeeded;

    return wheelsLeft;
}
