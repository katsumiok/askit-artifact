// Recompilation count: 0
export function garyBoughtABoatFor_af0a2e({}: {}): number {
    // assume the initial value of the boat
    let initialValue: number = 9000;

    // calculate the depreciated value after 1st year
    initialValue -= initialValue * 0.3;

    // calculate the depreciated value after 2nd year
    initialValue -= initialValue * 0.3;
    
    // calculate the depreciated value after 3rd year
    initialValue -= initialValue * 0.2;

    // return the final value of the boat after 3 years
    return initialValue;
}
