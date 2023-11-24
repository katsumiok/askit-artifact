// Recompilation count: 0
export function thereAreX1TreesIn_4d0b88({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // There are 'x1' trees in Chris's yard.
    // Ferdinand has half the number of trees that Chris has.
    let treesInFerdinandsYard = x1 / 2;
    
    // Harry has 'x2' more than twice the number of trees that Ferdinand has.
    let treesInHarrysYard = (2 * treesInFerdinandsYard) + x2;
    
    // How many more trees are in Harry's yard than Ferdinand's yard?
    let moreTreesInHarrysYard = treesInHarrysYard - treesInFerdinandsYard;
    
    return moreTreesInHarrysYard;    
}
