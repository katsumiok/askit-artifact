// Recompilation count: 0
export function janeCountsTwoZebrasWith_49bdc7({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Jane counts two zebras with 'x1' stripes each, a zebra with 'x2' stripes, and another zebra with half that many stripes. 
    // How many stripes do the zebras have on average?
    let totalStripes = (2 * x1) + x2 + (x2 / 2);
    let numZebras = 4; // Two zebras with 'x1' stripes each, one zebra with 'x2' stripes, and one zebra with half 'x2' stripes
    let averageStripes = totalStripes / numZebras;
    return averageStripes;
}
