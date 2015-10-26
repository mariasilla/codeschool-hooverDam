var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
while (currentGen <= totalGen - 15) {
  totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen ++;
} 

for (var currentGen = 5; currentGen <= 19; currentGen++) {
  totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
};
  

