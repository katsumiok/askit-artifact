// Recompilation count: 0
export function carlHasFourTimesAs_fff71e({ x1 }: {
    x1: number;
}): number {
    // Carl has four times as many marbles as Sean and Sean has half as many marbles as Cal. If Sean has 'x1' marbles, how many marbles do Carl and Cal have combined?
    
    let seanMarbles = x1; //Sean's Marbles
    let calMarbles = seanMarbles * 2; //Cal's Marbles because Sean has half as many marbles as Cal
    let carlMarbles = seanMarbles * 4; //Carl's Marbles because Carl has four times as many marbles as Sean
  
    return carlMarbles + calMarbles;
}
