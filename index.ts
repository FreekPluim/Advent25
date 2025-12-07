
import * as readline from 'readline';
import Day1 from "./Day1.ts"
import Day2 from './Day2.ts';
import Day3 from './Day3.ts';
import Day4 from './Day4.ts';
import Day5 from './Day5.ts';
import Day6 from './Day6.ts';
import Day7 from './Day7.ts';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("what day do you want the answer to?", (day: string) => {

    rl.close();

    switch(+day){
        case 1:
            Day1();
            break;
        case 2:
            Day2();
            break;
        case 3:
            Day3();
            break;
        case 4:
            Day4();
            break;
        case 5:
            Day5();
            break;
        case 6:
            Day6();
            break;
        case 7:
            Day7();
            break;
        default:
            break;

    }

});
