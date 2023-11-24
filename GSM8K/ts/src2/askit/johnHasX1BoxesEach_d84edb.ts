// Recompilation count: 0
export function johnHasX1BoxesEach_d84edb({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
        // John has 'x1' boxes.  Each box is 'x2' inches by 'x3' inches by 'x4' inches.  
        // The walls are 'x5' inch thick.  What is the total inner volume of all 'x6' boxes?

        // Calculating inner dimensions of each box
        const innerLength = x2 - 2 * x5;
        const innerWidth = x3 - 2 * x5;
        const innerHeight = x4 - 2 * x5;

        // Making sure dimensions are not negative
        if (innerLength <= 0 || innerWidth <= 0 || innerHeight <= 0) {
            throw new Error('Box dimensions or wall thickness not valid');
        }

        // Calculating inner volume of each box
        const innerVolume = innerLength * innerWidth * innerHeight;

        // Total inner volume of all boxes
        return x1 * innerVolume;
    }
