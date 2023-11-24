// Recompilation count: 1
export function grandpaLovesToEatJelly_506052({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // calculate the number of medium-sized beans grandpa can eat
    let medBeans = x1 * 2;
    // calculate the number of small beans equivalent to one medium-sized bean
    let smallBeansPerMedium = x2 / x3;
    // return the total number of small beans grandpa can eat
    return medBeans * smallBeansPerMedium;
}
