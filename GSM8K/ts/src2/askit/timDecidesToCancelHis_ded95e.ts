// Recompilation count: 0
export function timDecidesToCancelHis_ded95e({}: {}): number{
   // Price for each streaming service
   const netflixPrice: number = 10;   
   const huluPrice: number = 10;
   const disneyPlusPrice: number = 10;

   //Discount that Tim gets for bundling Hulu and Disney Plus
   const bundleDiscount: number = 20/100;

   // Amount he pays for Hulu and Disney Plus after applying discount
   const discountedPrice: number = (huluPrice + disneyPlusPrice) - (huluPrice + disneyPlusPrice) * bundleDiscount;

   // Total cost of all subscriptions 
   const totalSubscriptionCost: number = netflixPrice + discountedPrice;

   // Cost of cable package that Tim cancelled
   const cablePackageCost: number = 60;

   // Money Tim saved
   const amountSaved: number = cablePackageCost - totalSubscriptionCost;

   return amountSaved;
}
