// Recompilation count: 0
export function shielaIsRequiredToSubmit_7a073e({}: {}): number {
        // Shiela is required to submit a 15-page research paper. She already finished writing 1/3 of the paper. How many pages does she have left to write?
        let totalPageRequirement = 15; // total pages required for the research paper
        let finishedPages = totalPageRequirement * (1/3); // the pages Shiela already finished

        // calculate the remaining pages Shiela is required to write
        let remainingPages = totalPageRequirement - finishedPages;

        return remainingPages;
    }
