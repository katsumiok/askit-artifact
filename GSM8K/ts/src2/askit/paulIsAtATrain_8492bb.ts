// Recompilation count: 0
export function paulIsAtATrain_8492bb({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {

        // calculate the time when the first train leaves
        let firstTrainLeave = x1 + x2;
        
        // calculate the time when the second train leaves
        let secondTrainStay = x2 / 4;
        let secondTrainLeave = firstTrainLeave + 30 + secondTrainStay;
        
        // calculate the time when the third train leaves
        let thirdTrainLeave = secondTrainLeave + 60;
        
        // calculate the time when the forth train arrives
        let forthTrainArrive = thirdTrainLeave + x3;
        
        // return the total wait time for Paul
        return forthTrainArrive;
    }
