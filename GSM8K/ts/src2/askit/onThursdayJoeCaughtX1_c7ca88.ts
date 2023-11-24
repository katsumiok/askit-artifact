// Recompilation count: 0
export function onThursdayJoeCaughtX1_c7ca88({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Thursday's catch is 'x1'
    // Friday's catch is 'x2' times of 'x1'
    let fridayCatch = x1 * x2;

    // Saturday's catch is half the amount of Friday's catch
    let saturdayCatch = fridayCatch / 2;

    // Total catch in pounds
    let totalCatch = x1 + fridayCatch + saturdayCatch;

    // Number of servings 
    // 1 serving of crawfish equals 'x4' pounds
    let numberOfServings = totalCatch / x4;

    return numberOfServings;
}
