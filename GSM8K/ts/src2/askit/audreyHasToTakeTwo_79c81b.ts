// Recompilation count: 0
export function audreyHasToTakeTwo_79c81b({ x1, x2 } : {
    x1: number;
    x2: number;
}): number {
    // Audrey has to take two math tests to pass 6th grade. She must correctly answer 70% of the total questions to move on to the 7th grade. The first test has 'x1' questions and she gets 60% of them correct. The second test has 'x2' questions. How many questions does she need to get right on the second test to move onto the 7th grade?
  
    // Calculate total questions
    let total = x1 + x2;

    // Calculate minimum correct answers needed
    let minCorrect = total * 0.7;

    // How many she got correct on first test
    let firstCorrect = x1 * 0.6;

    // Calculate how many she needs to get right on the second test
    let secondCorrect = Math.ceil(minCorrect - firstCorrect);

    return secondCorrect;
}
