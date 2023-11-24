// Recompilation count: 0
export function carlaJustGaveBirthTo_5359dc({}: {}): number {
  
   // Carla gave birth to identical octuplets. So, total babies = 8.

   const totalBabies = 8;

   // She dresses 3/4 of them in purple and 1/4 in blue.
   const purpleDressed = (3 / 4) * totalBabies; // 6 babies
   const blueDressed = totalBabies - purpleDressed; // 2 babies

   // if all the blue-wearers and 1/3 of the purple wearers also wear bows
   const purpleBows = (1 / 3) * purpleDressed; // 2 babies
   const blueBows = blueDressed; // 2 babies

   // total number of babies wearing bows
   const totalBows = purpleBows + blueBows; // 4 babies

   // the percentage chance a baby wearing a bow is wearing purple
   const purpleBowsPercentage = (purpleBows / totalBows) * 100;

   return purpleBowsPercentage; // 50 %

}
