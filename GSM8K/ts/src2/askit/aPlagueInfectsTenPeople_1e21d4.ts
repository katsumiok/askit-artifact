// Recompilation count: 2
export function aPlagueInfectsTenPeople_1e21d4({}: {}): number{
        // A plague infects ten people. Every day, each infected person infects six others. How many people are infected after three days?
    let infected = 10;
    for(let i=0; i<3; i++) {
        infected += infected * 6;
    }
    return infected;
}
