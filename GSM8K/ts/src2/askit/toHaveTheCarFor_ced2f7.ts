// Recompilation count: 0
export function toHaveTheCarFor_ced2f7({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    //To have the car for the weekend, Wilson's report card needs to show that he received 'x1' or higher in his math class. 
    //His math grade is calculated by the average of 'x2' test scores. On those tests, he received: 65, 94, 81, 'x3' and 74.
    //What is his current math grade?

    // Check if x2 is greater than 0 to avoid Division by 0
    if(x2 <= 0) {
        throw new Error("The number of tests cannot be 0 or a negative number"); 
    }

    // Calculate the average
    let sum: number = 65 + 94 + 81 + x3 + 74;
    let average: number = sum/x2;

    return average;
}
