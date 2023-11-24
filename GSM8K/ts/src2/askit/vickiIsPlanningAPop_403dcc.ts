// Recompilation count: 0
export function vickiIsPlanningAPop_403dcc({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Vicki is planning a pop concert at her high school. The show will be 'x1' hours. She is allowing each group 'x2' minutes to get on stage, 'x3' minutes to perform, and then 'x4' minutes to exit the stage. If she allows a 10-minute intermission, how many groups can perform in the concert?
       
        // x1 hours to minutes
        const totalMinutes = x1 * 60;
        // The amount of time each group takes in total
        const timePerGroup = x2 + x3 + x4;
        // Subtracting the intermission time
        const timeForGroups = totalMinutes - 10;
        // The total number of groups can perform in the concert
        const numberOfGroups = Math.floor(timeForGroups / timePerGroup);

        return numberOfGroups;
    }
