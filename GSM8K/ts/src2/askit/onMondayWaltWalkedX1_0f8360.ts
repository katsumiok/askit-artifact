// Recompilation count: 0
export function onMondayWaltWalkedX1_0f8360({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // On Monday, Walt walked 'x1' miles. 
    let mondayMiles = x1;
    // Tuesday, he walked 'x2' times as many miles as he walked on Monday. 
    let tuesdayMiles = x2 * x1;
    // His total mileage Monday through Wednesday was 'x3' miles. 
    let totalMiles = x3;
    // How many miles did he walk on Wednesday?
    let wednesdayMiles = totalMiles - mondayMiles - tuesdayMiles;

    return wednesdayMiles;
}
