// Recompilation count: 0
export function toMakeACallFrom_30a931({ x1 }: {
    x1: number;
}): number {
    // Define the thresholds
    const initialRate = 0.25;
    const reducedRate = 0.20;
    const timeLimit = x1;

    // Calculate the cost 
    if (36 <= timeLimit) {
        return 36 * initialRate;
    } else {
        let initialTime = timeLimit;
        let reducedTime = 36 - timeLimit;
        return (initialTime * initialRate) + (reducedTime * reducedRate);
    }
}
