// Recompilation count: 0
export function aCustomerSLoyaltyCard_cf60ec({}: {}): number {
    const lastTripSpend = 80;
    const thisTripSpendBeforeDiscounts = 43;

    // Calculate rewards from last trip
    const rewardForEach20DollarsSpend = 1;
    const rewardsFromLastTrip = Math.floor(lastTripSpend / 20) * rewardForEach20DollarsSpend;

    // Calculate total discount
    const discountsFromCoupon = rewardsFromLastTrip * 2;
    const totalDiscounts = rewardsFromLastTrip + discountsFromCoupon;

    // Calculate price after discounts
    let thisTripSpendAfterDiscounts = thisTripSpendBeforeDiscounts - totalDiscounts;

    // Only pay for items if any left after rewards
    thisTripSpendAfterDiscounts = thisTripSpendAfterDiscounts > 0 ? thisTripSpendAfterDiscounts : 0;

    return thisTripSpendAfterDiscounts;
}
