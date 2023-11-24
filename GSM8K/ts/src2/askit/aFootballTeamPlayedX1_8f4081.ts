// Recompilation count: 0
export function aFootballTeamPlayedX1_8f4081({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A football team played 'x1' games. They won 'x2' more than they lost. Let the games they lost be y.
    // Therefore, they won y + x2 games. 
    // Total games y + (y + x2) = x1
    // => 2y + x2 = x1
    // => 2y = x1 - x2
    // => y = (x1 - x2) / 2
    let y = (x1 - x2) / 2;
    
    // Number of games won is y + x2
    return y + x2;
}
