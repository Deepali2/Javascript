
//kebab to snake
let kebabToSnake = () => {
  let str = prompt("Enter a string with kebabs");
  while(str !== "quit") {
    str = prompt (`The snaked version is ${str.replace(/-/g, '_')}. Enter a new string with kebabs`);    
  }
  if (str === "quit") {
    alert("Thanks for playing. Try out another game.");
  }  
};


//factorial of a number
let factorial = () => {
  let num = (prompt("enter a positive integer number"));
  //check if the number entered is a positive integer
  while(num !== "quit") {
    let number = Number(num);
    //edge cases
    if (number < 0  || !Number.isInteger(number)) {
      alert("Factorials are defined only for positive integers");
    } 
    if (number === 0 || number === 1) {
      num = prompt(`The answer is 1. Enter a new positive integer`);
    }; 
  
    //using a recursive function to find the factorial
    const recursive = (number) => {      
      if (number === 0 || number === 1) return 1;
      return number * recursive(number - 1);
    };
    num = prompt(`Your answer is ${recursive(number)}. Enter a new positive integer.`)
  }  
  alert("Thanks for playing. Try out another game.");  
};



//print all numbers divisible by 5 and 3 between 5 and 50
let numbersDivBy5And3 = () => {
  let num = 5;
  while ( num <= 50 ) {
    if (num %5 === 0) {
      if (num %3 === 0) {
        console.log(num);
      }
    }
    num += 5;
  }
};


//print all odd numbers between 300 and 333
let odds = () => {
  let num = 301;
  while (num <= 333) {
    if (num %2 !== 0) console.log(num);
    num +=2;
  }
};


//print all evens between 10 and 40
let evens = () => {
  let num = 10;
  while(num <= 40) {
    if (num %2 === 0) {
      console.log(num);
    }
    num += 2;
  }
};


//print all numbers between -10 and 19
let print = () => {
  let num = -10;
  while (num <= 19) {
    console.log(num);
    num++;
  }  
};

//annoyomatic
let annoyomatic = () => {
  let answer = prompt("Are we there yet?");
  while(answer.indexOf("yes") === -1) {
    answer = prompt("Are we there yet?");
  }
  alert("Yay, We made it!!!");
}
// guessing game function
let guessingGame = () => {
  let secretNumber = 4;  
  let guess = Number(prompt("Guess A Number"));
  while (guess !== secretNumber) {
    if (guess < secretNumber) {
      guess = Number(prompt("Guess Higher"));
    } else {
      guess = Number(prompt("Guess Lower"));
    }
  }
  alert("You got it right!")
};



// window.setTimeout(function() {
//   let secretNumber = 4;  
//   let guess = Number(prompt("Guess A Number"));
//   while (guess !== secretNumber) {
//     if (guess < secretNumber) {
//       guess = Number(prompt("Guess Higher"));
//     } else {
//       guess = Number(prompt("Guess Lower"));
//     }
//   }
//   alert("You got it right!!");
// }, 500);













