// Recompilation count: 0
export function ifAClassroomHasX1_c82a79({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // If a classroom has 'x1' times as many girls as they do boys, 
    // and 1/10 as many nongendered children as they do boys, 
    // and the classroom has 'x2' boys.  How many total children does it have?
    let girls = x1 * x2;
    let nongendered = x2 / 10;
    let totalChildren = girls + x2 + nongendered;
    return totalChildren;
}
