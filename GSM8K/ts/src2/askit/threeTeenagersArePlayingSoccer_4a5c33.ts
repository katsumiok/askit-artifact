// Recompilation count: 0
export function threeTeenagersArePlayingSoccer_4a5c33({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Richie's number of goals is 'x3'
    // Mark's number of goals is 'x3 - x1' as Richie scored 'x1' more than Mark
    // Anna's number of goals is 'x3 - x2' as Richie scored 'x2' more than Anna
    // Total number of goals = Richie's goals + Mark's goals + Anna's goals
    return x3 + (x3 - x1) + (x3 - x2);
}
