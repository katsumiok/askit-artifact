// Recompilation count: 0
export function amyIsTakingAHistory_335d0b({ x1, x2, x3, x4, x5 }: {x1: number; x2: number; x3: number; x4: number; x5: number;}): number {
    let multipleChoiceScore:number = x1 * x3 * 0.8;
    let trueFalseScore:number = x1 * x4 * 0.9;
    let longAnswerScore:number = x2 * x5 * 0.6;
    
    let totalScore:number = multipleChoiceScore + trueFalseScore + longAnswerScore;

    return totalScore;
}
