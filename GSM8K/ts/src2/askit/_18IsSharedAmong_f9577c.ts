// Recompilation count: 0
export function _18IsSharedAmong_f9577c({ x1 }: {
    x1: number;
}): number {
    // $18 is shared among 'x1' boys.
    let baseShare = 18 / x1;

    // The eldest added $5 to his share and added another $10 the following day.
    baseShare = baseShare + 5 + 10;

    // He later needed some money and spent $8 from his total so far.
    baseShare = baseShare - 8;

    // After saving some more, he was able to triple the amount he had left after spending the $8.
    baseShare = baseShare * 3;

    // How much does he have now?
    return baseShare;
}   
