// Recompilation count: 0
export function onMondayThePostOffice_445c9a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    const tuesdayDeliver = x1 / 5 + x2;
    const wednesdayDeliver = 2 * tuesdayDeliver + x3;

    return x1 + tuesdayDeliver + wednesdayDeliver;
}
