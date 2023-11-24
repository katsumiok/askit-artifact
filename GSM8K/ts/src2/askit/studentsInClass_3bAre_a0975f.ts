// Recompilation count: 0
export function studentsInClass_3bAre_a0975f({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Students in class 3B are collecting school points for behavior. If they get enough points in total, they can go on a trip. In the class, there are Adam, Martha, Betty, and Tom. Adam has collected 'x1' points. Betty was better than Adam and collected 30% more. Marta managed to collect 'x2' times more points than Tom, who has 'x3' points less than Betty. How many points is the class missing to go on the trip if the minimum threshold is 'x4' points?
        let bettyPoints = x1 * 1.3;
        let tomPoints = bettyPoints - x3;
        let martaPoints = x2 * tomPoints;
        let totalPoints = x1 + bettyPoints + tomPoints + martaPoints;
        return (x4 - totalPoints) > 0 ? x4 - totalPoints : 0;
}
