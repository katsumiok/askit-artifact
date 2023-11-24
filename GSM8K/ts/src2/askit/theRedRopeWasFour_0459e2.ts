// Recompilation count: 4
export function theRedRopeWasFour_0459e2({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // The red rope was four times the length of the blue rope. 
        // The blue rope was 'x1' centimeters shorter than the yellow rope. 
        // If the 'x2' ropes had a combined length of 'x3' centimeters, 
        // what was the length of the red rope in centimeters?
        
        // As per rules:
        // Let's assume that Yellow is "y", Blue is "b" and Red is "r".
        // r = 4b;
        // b = y - x1; 
        // y + b + r = x3; replace b in the equation y + y - x1 + 4 * (y - x1) = x3; simplify we get 6y - 5x1 = x3; 
        // isolating y: y = (x3 + 5x1) / 6
        // replacement b = x1 in r = 4b to get r = 4 * (y - x1);

        let y = (x3 + 5 * x1) / 6;
        let redRopeLength = 4 * (y - x1);
        return redRopeLength;
    }
