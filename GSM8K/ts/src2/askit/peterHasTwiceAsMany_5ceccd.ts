// Recompilation count: 0
export function peterHasTwiceAsMany_5ceccd({ x1 }: {
    x1: number;
}): number {
    // If Jack has x1 dishes, since he collected twice as many dishes as socks
    // He has socks = x1 / 2
    let jackSocks = x1 / 2;
    
    // If Peter has half times as many dishes as Jack and twice as many socks 
    // then Peter has dishes = x1 / 2 and socks = 2 * jackSocks
    let peterDishes = x1 / 2;
    let peterSocks = 2 * jackSocks;

    // The total number of socks and dishes Peter and Jack have together is
    // Peter's dishes + Jack's dishes + Peter's socks + Jack's socks
    return peterDishes + x1 + peterSocks + jackSocks;    
}
