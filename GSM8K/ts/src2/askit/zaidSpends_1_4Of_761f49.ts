// Recompilation count: 0
export function zaidSpends_1_4Of_761f49({}: {}): number {
   // Zaid's monthly earning
   const earning = 6000;

   // amount spent on rent
   const rent = earning * 1/4;

   // amount spent on car fuel
   const fuel = earning * 1/3;

   // remaining amount after spending on rent and fuel
   const remaining_after_rent_and_fuel = earning - (rent + fuel);

   // amount donated to charity
   const charity = remaining_after_rent_and_fuel / 2;

   // remaining amount after donation
   const remaining_after_donation = remaining_after_rent_and_fuel - charity;

   // amount given to daughter and wife
   const daughter_and_wife = 200 + 700;

   // final remaining amount after all expenses
   const final_remaining = remaining_after_donation - daughter_and_wife;

   return final_remaining;
}
