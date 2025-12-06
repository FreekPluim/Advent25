import * as fs from "fs"
import * as readline from 'readline';


function Day5(){
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
    const file = fs.readFileSync("./Input/input_Day5.txt", 'utf-8')
    const lines: string[] = file.split(/\r?\n/);
    let answer = 0;

    let validIDs = GetValidIDs(lines);

    for(let i = lines.indexOf('.') + 1; i < lines.length; i++){
        console.log(lines[i])
        for(let j = 0; j < validIDs.length; j++){
            let rangeSplit = validIDs[j].split("-")
            if(+lines[i] >= +rangeSplit[0] && +lines[i] <= +rangeSplit[1] ) 
            {
                answer++
                break;
            }
        }
    }

     console.log("Password Part 1 = " + answer)
}

function GetValidIDs(lines : string[]) : string[]
{
    let validNumbers: string[] = []

    for(let i = 0; i < lines.length; i++){

        if(lines[i] === "."){
             return validNumbers;
        }
        else{
            validNumbers.push(lines[i])
        } 
    }

    return []
}

function part2()
{
    const file = fs.readFileSync("./Input/input_Day5.txt", 'utf-8')
    let lines: string[] = file.split(/\r?\n/);
    let answer = 0;

    let validIDs = GetValidIDs(lines)
    validIDs.sort((a, b) => +a.split("-")[0] - +b.split("-")[0])

    let currentHighestNumber = 0;

    console.log(validIDs)

    for(let i = 1; i < validIDs.length; i++){
        let splitPrevious = validIDs[i-1].split("-");
        let splitCurrent = validIDs[i].split("-");

        //console.log("Handeling  " + validIDs[i])

        if(+splitCurrent[0] <= +splitPrevious[1]){
            //Change range of this index
            if(+splitCurrent[1] <= currentHighestNumber){ 
                validIDs[i] = currentHighestNumber+1 + "-" + currentHighestNumber;
            }
            if(+splitPrevious[1]+1 <= +splitCurrent[1]){
                currentHighestNumber = +splitCurrent[1]
                validIDs[i] = (+splitPrevious[1]+1) + "-" + splitCurrent[1];
            }
            else {
                currentHighestNumber = +splitPrevious[1]
                validIDs[i] = currentHighestNumber+1 + "-" + currentHighestNumber;
            }
        }
        else if(+splitCurrent[1] <= currentHighestNumber)
        { 
            validIDs[i] = currentHighestNumber+1 + "-" + currentHighestNumber;
        }

        //console.log("Handled  " + validIDs[i])
        answer += ((+splitPrevious[1] - +splitPrevious[0]) + 1)
    }    
    //console.log(validIDs)
    answer += ((+validIDs[validIDs.length-1].split("-")[1] - +validIDs[validIDs.length-1].split("-")[0]) + 1)
    //console.log(validIDs[validIDs.length-1])

    console.log("Password Part 2 = " + answer)
}


export default Day5;