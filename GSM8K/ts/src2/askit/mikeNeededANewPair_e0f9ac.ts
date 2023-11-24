// Recompilation count: 0
export function mikeNeededANewPair_e0f9ac({}: {}): number {
        // Mike needed a new pair of jeans.  When he got to the mall he saw that his favorite jeans were advertised 25% off.  The original price of the jeans was $40.  How much money will Mike have left over if he pays with a $50.00 bill?
        let originalPrice = 40.00;
        let percentOff = 25;
        let bill = 50.00;

        let discountedPrice = originalPrice - ((percentOff / 100) * originalPrice);
        let amountLeft = bill - discountedPrice;

        return amountLeft;
    }
