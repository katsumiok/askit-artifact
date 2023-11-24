// Recompilation count: 0
export function janePlantedABeanstalkIn_358670({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    let height = x1;

    for (let week = 1; week <= x3; week++) {
        if (week == 2) {
            height *= 2;
        } else if (week == 3) {
            height += x2;
        } else if (week > 3) {
            console.log('The behaviour after 3 weeks is not specified in the problem.');
            break;
        }
    }

    return height;
}
