// Recompilation count: 0
export function pierrePaulAndJacquesBought_7e3d5c({ x1 }: {
    x1: number;
}): number {
    // Pierre, Paul, and Jacques bought 'x1' kg of apples. Peter wants a quarter of that and Paul wants 1/3 of that. How many kilograms will Jacques have left?
    let peterPart = x1 / 4;
    let paulPart = x1 / 3;
    let jacquesPart = x1 - (peterPart + paulPart);
    return jacquesPart;
}
