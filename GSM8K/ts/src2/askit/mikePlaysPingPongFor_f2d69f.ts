// Recompilation count: 0
export function mikePlaysPingPongFor_f2d69f({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Mike plays ping pong for 'x1' minutes.  In the first 'x2' minutes, he scores 'x3' points.  
    let firstScore = x3;
    // In the second 'x4' minutes, he scores 25% more points.
    let secondScore = x3 * 1.25;
    // How many total points did he score?
    let totalScore = firstScore + secondScore;
    return totalScore;
}

