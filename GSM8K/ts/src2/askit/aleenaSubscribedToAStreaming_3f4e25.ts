// Recompilation count: 0
export function aleenaSubscribedToAStreaming_3f4e25({}: {}): number {
    // Aleena subscribed to a streaming service that charges her $140 per month. 
    // If the streaming company charged her the initial amount for the first half of the year 
    // and then charged her 10% less money on the other half of the year, 
    // calculate the total amount she had paid for the streaming service by the end of the year.

    const monthlyCharge = 140;
    const halfYear = 6;

    // Calculate the amount for the first half of the year
    let firstHalfAmount = monthlyCharge * halfYear;

    // Calculate the amount for the second half of the year with 10% less
    let secondHalfAmount = (monthlyCharge * 0.9) * halfYear;

    // Return the sum of first half and second half amounts
    return firstHalfAmount + secondHalfAmount;
}
