// Recompilation count: 0
export function mattisonIsX1InchesTall_2f8ff5({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // The total height of the house is 'x2' times as high as Mattison's height
        let totalHeight = x1 * x2;

        // The floor to the ceiling on the first floor is thrice as high as Mattison's height (x1)
        let firstFloorHeight = x1 * 3;

        // The height of the roof from the second floor's floor = The total height of the house - The first floor's height
        let secondFloorHeight = totalHeight - firstFloorHeight;

        return secondFloorHeight
}
