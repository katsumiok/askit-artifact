// Recompilation count: 0
export function sallyHasRealizedSheDid_b1fb22({}: {}): number {
     // Sally has realized she did not receive a full wage this week. Her bank account, which held $200 at the start of the week, now holds $420. She has received no other money into her bank account this week. If her weekly wage should be $300, how many dollars were withheld from Sally’s wage?
     
     // Calculate the amount of money Sally received this week
     const moneyReceived = 420 - 200;

     // Calculate the amount of money withheld from Sally's wage
     const moneyWithheld = 300 - moneyReceived;

     // Return the amount of money withheld
     return moneyWithheld;
}
