// Recompilation count: 0
export function sueLivesInAFun_ce86e7({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Initial number of pink plastic flamingos
    let pinkFlamingos = x1;

    // On Saturday, third of the flamingos are painted white
    let whiteFlamingos = pinkFlamingos / 3;
    pinkFlamingos -= whiteFlamingos;

    // On Sunday, 'x2' pink flamingos are added
    pinkFlamingos += x2;

    // Return how many more pink flamingos there are than white flamingos
    return pinkFlamingos - whiteFlamingos;
}
