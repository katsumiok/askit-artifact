// Recompilation count: 0
export function janeHasSaved_4Of_7cf64c({ x1 }: {x1: number;}): number {
    // Jane has saved $4 of her allowance every week for the past 'x1' weeks. 
    // If she continues to save the same amount each week, 
    // how many more weeks will it take for her to have saved a total of $60?

    // First, calculate how much Jane has already saved.
    let totalSaved: number = 4 * x1;

    // If Jane has already saved or exceeded $60, return 0 because no more weeks are needed.
    if(totalSaved >= 60){
        return 0;
    }

    // Subtract the total saved from $60 to calculate how much more needs to be saved.
    let moreToSave: number = 60 - totalSaved;

    // Divide the amount needed by the weekly savings amount to find out how many more weeks are needed.
    // Math.ceil is used to round up to the next whole number since Jane cannot save for a fraction of a week.
    let additionalWeeks: number = Math.ceil(moreToSave / 4);

    // Return the number of additional weeks Jane needs to keep saving.
    return additionalWeeks;
}

