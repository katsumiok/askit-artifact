// Recompilation count: 0
export function findTheModeOfThe_dac65b({ ns }: {
    ns: number[];
}): number {
    // Find the mode of the array 'ns'
    const frequencyMap = new Map<number, number>();

    // count frequency of each number
    ns.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    let maxFrequency = 0;
    let mode = 0;

    frequencyMap.forEach((frequency, num) => {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mode = num;
        }
    });

    return mode;
}
