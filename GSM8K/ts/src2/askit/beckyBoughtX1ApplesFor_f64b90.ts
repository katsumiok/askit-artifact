// Recompilation count: 4
export function beckyBoughtX1ApplesFor_f64b90({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // Becky bought 'x1' apples for 'x2' cents each and received a $1 discount. 
        let beckyPaid = (x1 * x2 / 100) - 1

        // Kelly bought 'x3' apples for 'x4' cents each and received a 'x5' percent discount. 
        let kellyPaid = (x3 * x4 / 100) * (1 - (x5 / 100))
        
        // How much more did Kelly pay than Becky?
        return kellyPaid - beckyPaid;
    }
