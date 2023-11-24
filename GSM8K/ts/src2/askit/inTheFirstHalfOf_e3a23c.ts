// Recompilation count: 0
export function inTheFirstHalfOf_e3a23c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
   //Team A scores 'x1' goals and team B scores 'x2' goals fewer than team A in the first half
   let firstHalfGoalsA = x1;
   let firstHalfGoalsB = x1 - x2;

   //In the second half, team B scores 'x3' times the number of goals it scored in the first half
   let secondHalfGoalsB = firstHalfGoalsB * x3;

   //In the second half, team A scores 1/4 of the number of goals scored by team B
   let secondHalfGoalsA = secondHalfGoalsB / 4;

   //Total number of goals scored in the match
   let totalGoals = firstHalfGoalsA + firstHalfGoalsB + secondHalfGoalsA + secondHalfGoalsB;

   return totalGoals;
}
