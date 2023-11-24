// Recompilation count: 0
export function maryIsMakingIceCubes_f950ca({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Assume the number of strawberry cubes to be 'a'
        // Number of blueberry cubes is 'x1' times strawberry cubes minus 4
        // Total cubes is 'x2' which equals 'a' + 'x1' * 'a' - 4
        // Thus 'a' = (4 + 'x2') / (1 + 'x1')
        // Blueberry cubes = 'x1' * 'a' - 4

        let a = (4 + x2) / (1 + x1);
        return x1 * a - 4;
    }
