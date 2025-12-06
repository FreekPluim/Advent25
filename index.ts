
import * as readline from 'readline';
import Day1 from "./Day1.ts"
import Day2 from './Day2.ts';
import Day3 from './Day3.ts';
import Day4 from './Day4.ts';
import Day5 from './Day5.ts';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("what day do you want the answer to?", (day: string) => {

    if(day == '1'){
        Day1();
    }
    if(day == "2"){
        Day2();
    }
    if(day == "3"){
        Day3();
    }
    if(day == "4"){
        Day4();
    }
    if(day == "5"){
        Day5();
    }

});
