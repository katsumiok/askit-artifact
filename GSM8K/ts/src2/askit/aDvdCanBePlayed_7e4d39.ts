// Recompilation count: 0
export function aDvdCanBePlayed_7e4d39({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A DVD can be played 'x1' times before it breaks. There are two DVDs in the public library, 
    // one has been played 'x2' times and the other has been played 'x3' times. 
    // How many total times can both DVDs be played before they break?
    
    const dvd1Left = Math.max(0, x1 - x2);
    const dvd2Left = Math.max(0, x1 - x3);

    return dvd1Left + dvd2Left;
}
