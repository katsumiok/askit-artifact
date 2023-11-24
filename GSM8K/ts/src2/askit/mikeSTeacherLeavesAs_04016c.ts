// Recompilation count: 0
export function mikeSTeacherLeavesAs_04016c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Mike's teacher leaves as homework the reading of a 200-page book. 
    // The assignment is to be completed within 'x1' days. 
    // Mike plans to read 'x2' pages a day. 
    // How many days before the deadline will Mike finish his reading?

    let requiredDays = Math.ceil(200 / x2);
    return (requiredDays <= x1) ? x1 - requiredDays : 0;
}
