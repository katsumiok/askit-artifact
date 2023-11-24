// Recompilation count: 0
export function theScienceCenterHostedField_01e78d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The Science Center hosted field trips Monday through Friday last week. On Monday, 'x1' classes visited. Twice as many visited on Tuesday and three times as many visited on Wednesday. Another 'x2' classes visited on Thursday and 'x3' visited on Friday. In all, how many classes visited the Science Center last week?
    let classesVisited = x1 + 2*x1 + 3*x1 + x2 + x3;
    return classesVisited;
}
