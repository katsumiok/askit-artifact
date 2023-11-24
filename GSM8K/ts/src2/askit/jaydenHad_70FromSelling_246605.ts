// Recompilation count: 0
export function jaydenHad_70FromSelling_246605({}: {}): number {
    // Jayden had $70 from selling pictures he took as a hobby.  
    // His sister Ava gave him half of her $90 allowance 
    // to help him buy a new camera that costs $200. 
    // How much more does Jayden need to buy the camera?
    const jaydenMoney = 70;
    const avaAllowance = 90 / 2;

    const totalMoney = jaydenMoney + avaAllowance;
    const cameraCost = 200;

    const moneyNeeded = cameraCost - totalMoney;

    return moneyNeeded; // Returns how much more Jayden needs to buy the camera
}
