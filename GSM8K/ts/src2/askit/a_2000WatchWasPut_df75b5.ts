// Recompilation count: 0
export function a_2000WatchWasPut_df75b5({}: {}): number {
    // Mr. Rogers bought it at 75% of its original price. 
    // That means he bought it for 2000 * 0.75 = $1500
    let rogersBuyingPrice = 2000 * 0.75;

    // He then sold the watch to his friend at 120% of the price that he bought it.
    // That means his friend bought it for 1500 * 1.2 = $1800
    let friendBuyingPrice = rogersBuyingPrice * 1.2;

    // The percentage discount obtained by Mr. Roger's friend from the original price is
    // (Original price - Friend's price) / Original price * 100%
    let discount = (2000 - friendBuyingPrice) / 2000 * 100;
    
    return discount;
}
