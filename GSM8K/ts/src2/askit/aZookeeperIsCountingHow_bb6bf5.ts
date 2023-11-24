// Recompilation count: 0
export function aZookeeperIsCountingHow_bb6bf5({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A zookeeper is counting how many lions are in the enclosure. She counts 'x1' female lions, half as many male lions, and 'x2' lion cubs. How many lions are in the enclosure?
    let maleLions = x1 / 2;
    return x1 + maleLions + x2;
}
