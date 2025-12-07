import * as fs from "fs"
import * as readline from 'readline';


function Day6(){
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
    const file = fs.readFileSync("./Input/input_Day6.txt", 'utf-8')
    const lines: string[] = file.split(/\r?\n/);
    let answer = 0;

    const n1 = lines[0].split(/\s+/g);
    const n2 = lines[1].split(/\s+/g);
    const n3 = lines[2].split(/\s+/g);
    const n4 = lines[3].split(/\s+/g);
    const addOrMult = lines[4].split(/\s+/g);

    for(let i = 0; i < n1.length; i++)
    {
        if(addOrMult[i] == "+") answer += (+n1[i] + +n2[i] + +n3[i] + +n4[i])
        else answer += (+n1[i] * +n2[i] * +n3[i] * +n4[i])
    }
    
     console.log("Password Part 1 = " + answer)
}

function part2()
{
    const file = fs.readFileSync("./Input/input_Day6.txt", 'utf-8')
    let lines: string[] = file.split(/\r?\n/);
    let answer = 0;
    const n1 = lines[0].split(/\s+/g);
    const n2 = lines[1].split(/\s+/g);
    const n3 = lines[2].split(/\s+/g);
    const n4 = lines[3].split(/\s+/g);
    const addOrMult = lines[4].split(/\s+/g);

    let beginIndex = 0
    let lastIndex = 0
    let numLength = 0
    
    for(let i = 0; i < n1.length; i++)
    {
        numLength = longestNumber(n1[i], n2[i], n3[i], n4[i])
        lastIndex += numLength

        let n1Actual = lines[0]?.substring(beginIndex, lastIndex);
        let n2Actual = lines[1]?.substring(beginIndex, lastIndex);
        let n3Actual = lines[2]?.substring(beginIndex, lastIndex);
        let n4Actual = lines[3]?.substring(beginIndex, lastIndex);

        let newEquatsion : string[] = [];

        for(let j = numLength-1; j >= 0; j--){
            newEquatsion.push("");
            if(n1Actual[j] != undefined && n1Actual[j] != " ") newEquatsion[newEquatsion.length-1] = newEquatsion[newEquatsion.length-1] + n1Actual[j]
            if(n2Actual[j] != undefined && n2Actual[j] != " ") newEquatsion[newEquatsion.length-1] = newEquatsion[newEquatsion.length-1] + n2Actual[j]
            if(n3Actual[j] != undefined && n3Actual[j] != " ") newEquatsion[newEquatsion.length-1] = newEquatsion[newEquatsion.length-1] + n3Actual[j]
            if(n4Actual[j] != undefined && n4Actual[j] != " ") newEquatsion[newEquatsion.length-1] = newEquatsion[newEquatsion.length-1] + n4Actual[j]
        }
        console.log(newEquatsion)
        if(newEquatsion.length > 0){
            
            let tempAnswer = +newEquatsion[0] 
            for(let j = 1; j < newEquatsion.length; j++){
                if(addOrMult[i] == "+") tempAnswer += +newEquatsion[j]
                else tempAnswer *= +newEquatsion[j]
            }
            
            answer += tempAnswer;
        }
        lastIndex += 1
        beginIndex = lastIndex;
    }
    
    console.log("Password Part 2 = " + answer)
}

function longestNumber(n1, n2, n3, n4) : number
{
    let longest = 0;

    if(n1?.length > longest) longest = n1?.length
    if(n2?.length > longest) longest = n2?.length
    if(n3?.length > longest) longest = n3?.length
    if(n4?.length > longest) longest = n4?.length

    //console.log("longest =")

    return longest
}


export default Day6;