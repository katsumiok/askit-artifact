// Recompilation count: 0
export function raynaHasX1MoreDollars_43fa65({ x1 }: { x1: number; }): number {
    // Arelia has $120
    let aurelia = 120;
    
    // Kassidy has 3/4 times as much money as Aurelia
    let kassidy = aurelia * (3/4);

    // Rayna has 'x1' more dollars than Kassidy
    let rayna = kassidy + x1;

    // If they decided to add together their money and share equally among them
    let totalMoney = rayna + kassidy + aurelia;
    let equalShare = totalMoney / 3;
    
    return equalShare;
}
