import * as fs from "fs"
import * as readline from 'readline';


function Day1(){
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
    var current = 50;
    var hit0Amount = 0;

    const file = fs.readFileSync("./Input/input_Day1.txt", 'utf-8')
    const lines: string[] = file.split(/\r?\n/);

    for(var i = 0; i < lines.length; i++){
         //Split
         var dir = lines[i][0]

         if(dir == "R") // Rotate up 
         {
             var rotation : number = +lines[i].split("R")[1]
            //Make sure its below 100
             var rotation = rotation % 100;

             //Rotate the dial and make sure it doesn't go over 99
             current += rotation;
             current = current % 100

             if(current == 0){
                hit0Amount++
             }

         }
         else // Rotate down
         {
             var rotation : number = +lines[i].split("L")[1]
            //Make sure its below 100
             var rotation = rotation % 100;

             //Rotate the dial and make sure it doesn't go over 99
             current -= rotation;
             if(current < 0) current += 100
             if(current == 0){
                hit0Amount++
             }
         }
     }
     console.log("Password Part 1 = " + hit0Amount)
}


function part2()
{
    var current = 50;
    var hit0Amount = 0;

    const file = fs.readFileSync("./Input/input_TestNiels.txt", 'utf-8')
    const lines: string[] = file.split(/\r?\n/);

    var dontCount = false;

    for(var i = 0; i < lines.length; i++){
         //Split
         var direction = lines[i][0]

         if(direction == "R") // Rotate +
         {
             const rotationString : string = lines[i].split("R")[1]
             if(rotationString?.length > 2){
                 hit0Amount += +rotationString[0]
            }
            var rotation : number = +rotationString

            //Make sure its below 100
             var rotation = rotation % 100;

             //Rotate the dial and make sure it doesn't go over 99
             current += rotation;

             if(current > 99){
                 current = current % 100
                 hit0Amount++
             }
         }
         else // Rotate -
         {
            const rotationString : string = lines[i].split("L")[1]
            if(rotationString?.length > 2){
                hit0Amount += +rotationString[0]
            }
            var rotation : number = +rotationString
            //Make sure its below 100
             var rotation = rotation % 100;

             //Rotate the dial and make sure it doesn't go over 99
            if(current == 0){
                dontCount = true;
            }

             current -= rotation;
             if(current < 0){
                current += 100

                if(!dontCount) hit0Amount++  

                dontCount = false;
            } 
             if(current == 0){
                hit0Amount++
             }
         }
     }
     console.log("Password Part 2 = " + hit0Amount)
}

export default Day1;