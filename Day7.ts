import * as fs from "fs"
import * as readline from 'readline';


function Day7(){
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
    const file = fs.readFileSync("./Input/input_Day7.txt", 'utf-8')
    const lines: string[] = file.split(/\r?\n/);
    let answer = 0;

    let indexes = [lines[0].indexOf("S")]

    for(let i = 1; i < lines.length; i++)
    {
        indexes.sort((a, b) => a - b);
        console.log(indexes)
        for(let index = indexes.length-1; index >= 0; index--)
        {
            if(indexes[index] == -1) continue
            if(lines[i][indexes[index]] == "^"){
                answer += 1
                let temp = indexes[index]
                if(!indexes.includes(temp+1)){
                    if(indexes[index] == temp) indexes[index] = temp+1
                    else indexes.push(temp+1)
                }
                if(!indexes.includes(temp-1)) 
                {
                    if(indexes[index] == temp) indexes[index] = temp-1
                    else indexes.push(temp-1)
                }
                if(indexes.includes(temp)){
                    indexes[index] = -1
                } 
            }
        }
    }
        
    
     console.log("Password Part 1 = " + answer)
}

function part2()
{
    const file = fs.readFileSync("./Input/input_Day7.txt", 'utf-8')
    let lines: string[] = file.split(/\r?\n/);
    let answer = 0;
    
    let indexes = [{index: lines[0].indexOf("S"), amount: 1}]

    for(let i = 1; i < lines.length; i++)
    {
        indexes.sort((a, b) => a.index - b.index);
        for(let index = indexes.length-1; index >= 0; index--)
        {
            if(lines[i][indexes[index].index] == "^")
            {
                let temp = indexes[index]
                
                if(indexes.some(index => index.index == temp.index-1)){
                    indexes[indexes.findIndex(i => i.index == temp.index-1)].amount += temp.amount
                }
                else{
                    indexes.push({index: temp.index-1, amount: temp.amount})
                }
                
                if(indexes.some(index => index.index == temp.index+1)){
                    indexes[indexes.findIndex(i => i.index == temp.index+1)].amount += temp.amount
                }
                else{
                    indexes.push({index: temp.index+1, amount: temp.amount})
                }

                indexes[index].amount = 0;
            }
        }
    }

    indexes.forEach(i => {
        answer += i.amount
    })

    console.log("Password Part 2 = " + answer)
}

function workingButExpensive(lines : string[]){
    let indexes = [lines[0].indexOf("S")]

    for(let i = 1; i < lines.length; i++)
    {
        indexes.sort((a, b) => a - b);
        console.log(indexes)
        for(let index = indexes.length-1; index >= 0; index--)
        {
            if(lines[i][indexes[index]] == "^"){
                let temp = indexes[index]

                indexes[index] = temp+1
                indexes.push(temp-1)
            }
        }
    }
}


export default Day7;