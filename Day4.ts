import * as fs from "fs"
import * as readline from 'readline';


function Day4(){
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
    const file = fs.readFileSync("./Input/input_Day4.txt", 'utf-8')
    const lines: string[] = file.split(/\r?\n/);
    let answer = 0;

    for(let line = 0; line < lines.length; line++){
        for(let position = 0; position < lines[line].length; position++){
            //Check if is roll
            if(lines[line][position] == ".") continue;
            
            if(checkGrid(lines, position, line) < 4){
                answer++
            }
        }
    }

     console.log("Password Part 1 = " + answer)
}

function checkGrid(lines, position, line) : number{
    let rolesAround = 0;
    for(let y = line-1; y <= line+1; y++){
        for(let x = position-1; x <= position+1; x++){
            if(x == position && y == line) continue;

            rolesAround += checkPosition(lines, y, x);
        }
    }

    return rolesAround;
}

function checkPosition(lines, line, position) : number
{
    if(position < 0 || position >= lines[line]?.length) return 0;
    if(line < 0 || line >= lines?.length) return 0;

    if(lines[line][position] == "@") return 1;
    else return 0;
}

function part2()
{
    const file = fs.readFileSync("./Input/input_Day4.txt", 'utf-8')
    let lines: string[] = file.split(/\r?\n/);
    let answer = 0;

    let tempLines: string[] = []

    while(true)
    {
        for(let line = 0; line < lines.length; line++){
            let tempLine = ""
            for(let position = 0; position < lines[line].length; position++){
                //Check if is roll
                if(lines[line][position] == ".") {
                    tempLine = tempLine + lines[line][position]
                    continue;
                }
                
                if(checkGrid(lines, position, line) < 4){
                    tempLine = tempLine + "."
                    answer++
                } else tempLine = tempLine + lines[line][position]
            }
            tempLines.push(tempLine)
        }

        if(areSame(lines, tempLines)){
            console.log("Password Part 2 = " + answer)
            return;
        }
        else{ 
            lines = tempLines
            tempLines = []
        }
    }
}

function areSame(lines, tempLines) : boolean {
    for(let line = 0; line < lines.length; line++){
        if(lines[line] != tempLines[line]) return false;
    }
    return true;
}

export default Day4;