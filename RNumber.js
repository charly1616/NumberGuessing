const readline = require("readline");
const prompts = readline.createInterface(process.stdin, process.stdout);



console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.`)

let number = 0;
function guessTheNumber(atemps, chances){
    if (atemps >= chances) {
        console.log(`Im sorry to tell you but, you ran out of atempts,
 The number was ${number}`)
        process.exit()
        return false;
    }

    
    prompts.question(`Enter your guess: `, (r)=>{
        let guessNum = Number(r)
        if (guessNum == NaN) {
            console.log(`This is not a valid number, try again`);
            guessTheNumber(atemps,chances)
            return;
        }
        if (guessNum > number) {
            console.log(`The number is less than ${guessNum}, try again!`);
            guessTheNumber(atemps+1,chances)
            return;
        } else if (guessNum < number){
            console.log(`The number is more than ${guessNum}, try again!`);
            guessTheNumber(atemps+1,chances)
            return;
        } else {
            console.log(`Congratulations, ${guessNum} was the number!`);
            process.exit()
            return;
        }

    })
}


prompts.question(`
Please select the difficulty level:
    1. Easy (10 chances)
    2. Medium (5 chances)
    3. Hard (3 chances)
--------------------------------------
    `,
(response) => {
    if (Number(response)==NaN){
        console.log("Not a valid difficulty level")
        return;
    }
    number = Math.floor(Math.random()*100)+1;

    switch(response) {
        case "1":
            console.log(`
Great! You have selected the easy difficulty level.
Let's start the game!`);
                guessTheNumber(0,10)
            break;
        case "2":
            console.log(`
Great! You have selected the Medium difficulty level.
Let's start the game!`);
                guessTheNumber(0,5)
            break;
        case "3":
            console.log(`
Great! You have selected the hard difficulty level.
Let's start the game!`);
                guessTheNumber(0,3)
            break;
        default:
            console.log("Not a valid difficulty level")
    }
})


