// Recompilation count: 0
export function aBagOfButtonsHad_e4a3b8({ x1 }: {
    x1: number;
}): number {
        // A bag of buttons had 'x1' buttons in it. Seven buttons had two holes and the rest had four holes. How many holes were in all the buttons in the bag?
        const sevenButtonsWithTwoHoles = 7 * 2;
        const restButtonsWithFourHoles = (x1 - 7) * 4;
        return sevenButtonsWithTwoHoles + restButtonsWithFourHoles;
    }

