// Recompilation count: 0
export function eliseIsLearningToWrite_86df9f({}: {}): number {
        // Elise is learning to write and decides to keep re-writing the alphabet until she knows it. She writes it in full twice, writes half of it once, then re-writes everything she has already written. How many letters has Elise written in total?
        let fullAlphabet = 26;
        let halfAlphabet = fullAlphabet / 2;

        let totalLetters = (fullAlphabet * 2) + halfAlphabet; // twice full alphabet + half alphabet

        totalLetters += totalLetters; // rewrites everything she has already written.

        return totalLetters;
    }
