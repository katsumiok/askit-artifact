// Recompilation count: 0
export function twoCarsAreDrivingOn_032266({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
     // Two cars are driving on a highway.  The first car is traveling at an average speed of 'x1' miles per hour 
     // when the second car passes it at an average speed of 'x2' miles per hour.  
     // If both cars continue on the highway at the same speed, how many miles will separate them after 'x3' hours?
     return (x2 - x1) * x3;
}
