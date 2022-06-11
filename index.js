const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = 0; //create variable

const sumTotalBatteries = batteryBatches.reduce((prev, next) => prev + next, totalBatteries);

console.log(sumTotalBatteries);

// batteryBatches.reduce((currentBatteries, batteryBatch) => {
//     const totalBatteries = batteryBatches.reduce((accum, batteryBatch)) => {
    
//         return currentBatteries + batteryBatch;
//         return accum + batteryBatch;
    
//     }}, 0);