import * as fs from "fs"
import * as readline from 'readline';


function Day2(){
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
    const file = fs.readFileSync("./Input/input_Day2.txt", 'utf-8')
    const ranges: string[] = file.split(",");
    let answerCount = 0;

    for(let i = 0; i < ranges.length; i++){
        for(let current = +ranges[i].split("-")[0]; current <= +ranges[i].split("-")[1]; current++){
            
            let numAsString = current.toString()

            if(numAsString.length % 2 == 0){
                for(let j = 0; j < numAsString.length / 2; j++){
                    if(numAsString[j] != numAsString[j + numAsString.length / 2])
                    {
                        break;
                    }
                    if(j == numAsString.length / 2 - 1){
                        //Found a match
                        answerCount += current;
                    }
                }
            }
        }
    }

    console.log("answer is " + answerCount)
}


function part2()
{

    const file = fs.readFileSync("./Input/input_Day2.txt", 'utf-8')
    const ranges: string[] = file.split(",");
    let answerCount = 0;

    for(let i = 0; i < ranges.length; i++){
        for(let current = +ranges[i].split("-")[0]; current <= +ranges[i].split("-")[1]; current++){
            
            let numAsString = current.toString()

            for(let j = 1; j <= numAsString.length/2; j++){
                
                const seq = numAsString.substring(0, j)

                const repeated = seq.repeat(numAsString.length / j)

                if(repeated === numAsString){
                    answerCount += current
                    break; 
                }
            }
        }
    }

    console.log("answer is " + answerCount)
}

export default Day2;