// Recompilation count: 0
export function madelineAndHerRoommateKeenan_a63c46({}: {}): number {
    // calculate the total amount Madeline pays
    let madelinePay = 0.60 * 400; // 60% of total expense

    // calculate how much Keenan pays
    let keenanPay = 400 - madelinePay;

    // calculate how much Keenan pays per week in a four-week month
    let keenanPayPerWeek = keenanPay / 4;

    return keenanPayPerWeek;
}
