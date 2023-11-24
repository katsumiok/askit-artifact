// Recompilation count: 2
export function richardJerryAndRobertAre_24029a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Richard, Jerry, and Robert are going to share 'x1' cherries equally
    const equalShares = x1 / 3;
    
    // Richard's share
    const richardShare = equalShares;
    
    // Jerry's share (same as Richard's since they are sharing equally) 
    const jerryShare = richardShare;

    // Robert has 'x2' cherries initially
    // and has 'x3' more than Richard hence Robert's total cherries will be 
    const robertTotalCherries = x2 + x3;
    
    // Hence, the difference cherries Robert have than Jerry will be
    const difference = robertTotalCherries - jerryShare;
    
    // round off the value to the nearest whole number
    return Math.round(difference); 
}
