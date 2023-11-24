// Recompilation count: 0
export function maryAndJohnGotMarried_39e093({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Mary and John got married last weekend.  There were 'x1' private cars and 'x2' buses parked outside the church.  
    // After the ceremony, each bus carried 'x3' people and each car carried 'x4' people. How many people were inside the church?

    let totalPeople = (x1 * x4) + (x2 * x3); // total number of people is the sum of people in cars and in buses

    return totalPeople;
}
