// Recompilation count: 6
export function jamesDecidesToBuyBirthday_1587c6({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
   // James needs to buy candles for his x1 sons. The ages of his sons will determine the number of candles needed.
   // One son is x2 years old and another son is 'x2' - 'x3' years old. Rest sons ages are not given, so for simplicity, we'll assume they're also using the same amount of candles.

   //Total candles needed for each son:
   let candlesPerSon1 = x2;
   let candlesPerSon2 = x2 - x3;
   let candlesPerSonOthers = candlesPerSon1; // assuming other sons also uses the same amount of candles.

   let totalCandles = candlesPerSon1 + candlesPerSon2 + (x1 - 2) * candlesPerSonOthers; //as we have already calculated for 2 sons, so (x1-2)

   // Now, we calculate the total cost. Each pack of 'x4' candles costs $3.
   let totalPacks = Math.ceil(totalCandles / x4); // Using Math.ceil to round up to the nearest whole number, since we can't buy partial packs of candles.
   
   let totalPrice = totalPacks * 3; //total packs multiplied by cost per pack

   // Return the total cost James will spend on candles.
   return totalPrice;

}
