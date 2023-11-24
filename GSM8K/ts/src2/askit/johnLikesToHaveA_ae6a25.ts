// Recompilation count: 0
export function johnLikesToHaveA_ae6a25({}: {}): number {
  // John drinks 4 glasses of water every weekday and 3 glasses on the weekends (because he has soda with dinner).
  let weekdayWater = 4;
  let weekdayDays = 5; // 5 days in a week: Monday to Friday
  let weekendWater = 3;
  let weekendDays = 2; // 2 days in a week: Saturday and Sunday
  
  // The total glasses of water John drinks in a week is calculated by adding water he drinks on weekdays 
  // and the water he drinks on weekend days.
  
  let totalGlasses = (weekdayWater * weekdayDays) + (weekendWater * weekendDays);
  
  return totalGlasses;
}
