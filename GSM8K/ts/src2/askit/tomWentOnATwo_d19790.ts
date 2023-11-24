// Recompilation count: 0
export function tomWentOnATwo_d19790({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {

    let firstWeekTravel: number = (x1 * x2);
    let nextTwoDaysTravel: number = firstWeekTravel * 0.3;
    let secondWeekTravel: number = x3 * 7;

    let totalTravel: number = firstWeekTravel + nextTwoDaysTravel + secondWeekTravel;

    return totalTravel;

}
