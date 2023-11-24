// Recompilation count: 0
export function theBenAndAggieBurrito_749d6c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The Ben and Aggie Burrito Shop makes 'x1' chimichangas on Tuesdays, 'x2' chimichangas on Wednesdays and twice as many on Friday. How many chimichangas do they make on those three days?
    let tuesdayChimichangas = x1;
    let wednesdayChimichangas = x2;
    let fridayChimichangas = 2 * x2;

    let totalChimichangas = tuesdayChimichangas + wednesdayChimichangas + fridayChimichangas;

    return totalChimichangas;
}
