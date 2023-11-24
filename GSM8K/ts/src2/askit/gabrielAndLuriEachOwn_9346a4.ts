// Recompilation count: 0
export function gabrielAndLuriEachOwn_9346a4({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Gabriel's player has 'x2' songs
    let gabrielsSongs = x2;
    let gabrielsCapacity = x1 - gabrielsSongs;

    // Luri's player has 'x3' times as many songs as Gabriel
    let lurisSongs = x2 * x3;
    let lurisCapacity = x1 - lurisSongs;

    // Number of fewer songs Luri can add to his player than Gabriel
    return gabrielsCapacity - lurisCapacity;
}
