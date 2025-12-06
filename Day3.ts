import * as fs from "fs"
import * as readline from 'readline';


function Day3(){
     const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

     rl.question("What part do you want the answer to? [1/2]", (part: string) => {

        if(part == '1'){
            part1();
        }
        if(part == '2'){
            part2();
        }
    
    
      rl.close();
    });
}

//Working
function part1(){
    const file = fs.readFileSync("./Input/input_Day3.txt", 'utf-8')
    const lines: string[] = file.split(/\r?\n/);

    let totalJoltage = 0;
    for(let i = 0; i < lines.length; i++){
        let firstHighest = +lines[i][0];
        let secondHighest = 0;
        let firstIndex = 0;
        let joltageOnBattery = "";
        
        for(let j = 1; j < lines[i].length-1; j++){
            if(firstHighest < +lines[i][j]){
                firstHighest = +lines[i][j]
                firstIndex = j;
            } 
        }
        for(let j = firstIndex+1; j < lines[i].length; j++){
            if(secondHighest < +lines[i][j]){
                secondHighest = +lines[i][j]
            } 
        }

        joltageOnBattery = firstHighest.toString() + secondHighest.toString();
        console.log("result index " + i + " is " + joltageOnBattery)

        totalJoltage += +joltageOnBattery
    }

     console.log("Password Part 1 = " + totalJoltage)
}


function part2()
{
    const file = fs.readFileSync("./Input/input_Day3.txt", 'utf-8')
    const lines: string[] = file.split(/\r?\n/);

    let totalJoltage = 0;
    for(let i = 0; i < lines.length; i++){
        let batteryNumbers : number[] = []
        let index = 0;
        let joltageOnBattery = "";

        for(let j = 11; j > -1; j--){

            batteryNumbers.push(0)

            for(let z = index; z < lines[i].length-j; z++){

                if(batteryNumbers[-j + 11] < +lines[i][z]){
                    batteryNumbers[-j + 11] = +lines[i][z]
                    index = z + 1;
                } 

            }
        }
        for(let j = 0; j < batteryNumbers.length; j++){
            joltageOnBattery = joltageOnBattery + batteryNumbers[j].toString();
        }

        totalJoltage += +joltageOnBattery
    }

     
     console.log("Password Part 2 = " + totalJoltage)
}

export default Day3;