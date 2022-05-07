const readline = require("readline");
let isTenPM;

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

scanner.question("Is it ten Pm? Say yes no or give me the time: ", (answer) => {
  isTenPM = answer;
  shouldISleepOrNot();
  scanner.close();
});

const shouldISleepOrNot = () => {
  console.log(isTenPM);
  if (isTenPM == "yes") {
    console.log("Time to sleep");
  } else if (isTenPM == "no") {
    console.log("Keep working");
  } else {
    isTenPM = parseInt(isTenPM);
    if (isTenPM > 10) {
      console.log("It's time, sleeeeeeep");
    } else {
      console.log("nope nope keep working");
    }
  }
};
