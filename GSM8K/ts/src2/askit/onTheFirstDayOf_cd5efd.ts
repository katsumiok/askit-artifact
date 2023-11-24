// Recompilation count: 0
export function onTheFirstDayOf_cd5efd({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // On the first day of school, Ava sees that her friends Cole and Xavier have both grown a lot over the summer. Xavier was 'x1' feet tall and grew 'x2' inches. Cole was 'x3' inches tall and grew 'x4' inches over the summer. What is the difference between Cole and Xavier’s height now?
        const XavierHeightNowInInches = x1 * 12 + x2; // converting Xavier's height to inches and adding the growth
        const ColeHeightNowInInches = x3 + x4; // adding Cole's initial height and his growth
        
        // returning the absolute difference between Cole and Xavier's height
        return Math.abs(XavierHeightNowInInches - ColeHeightNowInInches);
    }
