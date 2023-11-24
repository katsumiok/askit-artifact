// Recompilation count: 2
export function aFoodCatererWasTold_528f31({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // calculate the number of hotdogs the caterer prepared
  let numberOfHotdogsPrepared = x1 * 1.5;
  
  // calculate the number of hotdogs each guest ate
  let numberOfHotdogsEachGuestAte = 2;
  
  // calculate the number of hotdogs ate by the guests who showed up
  let numberOfHotdogsAte = x2 * numberOfHotdogsEachGuestAte;
  
  // calculate the number of guests who did not get a second hotdog
  let numberOfGuestsDidNotGetASecondHotdog = numberOfHotdogsAte - numberOfHotdogsPrepared;
  
  // return the number of guests who did not get a second hotdog
  return numberOfGuestsDidNotGetASecondHotdog;
}
