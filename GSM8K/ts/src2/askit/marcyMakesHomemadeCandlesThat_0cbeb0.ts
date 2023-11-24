// Recompilation count: 0
export function marcyMakesHomemadeCandlesThat_0cbeb0({ x1 }: { x1: number;}): number {
  // Marcy makes homemade candles that she markets as 99% guaranteed not to explode. So 1% of all candles made have the potential to explode.
  // 5% of the more dangerous candles have a defect that makes them smell like wet dog. 

  // Now to get number of candles that will both smell like wet dog and explode, we need to find 5% of the 1% dangerous candles made.
  
  // So first, find the 1% of x1.
  let dangerousCandles = 0.01 * x1; 

  // Then find the 5% of these dangerous candles.
  let dangerousAndDefectiveCandles = 0.05 * dangerousCandles; 

  // Return this value
  return dangerousAndDefectiveCandles; 
}
