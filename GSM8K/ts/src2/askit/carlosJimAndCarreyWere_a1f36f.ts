// Recompilation count: 0
export function carlosJimAndCarreyWere_a1f36f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Carlos, Jim and Carrey were at the beach playing and they decided to gather some seashells. 

    // Jim collected 'x1' seashells, which was 'x2' more than what Carlos collected.
    let jimSeashells = x1
    let carlosSeashells = jimSeashells - x2

    // Carlos collected twice as many as Carrey.
    let carreySeashells = carlosSeashells / 2

    // They gathered all their seashells and divided them equally between themselves. How many did each person get?
    let totalSeashells = jimSeashells + carlosSeashells + carreySeashells
    return totalSeashells / 3
}
