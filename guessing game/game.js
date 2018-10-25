window.setTimeout(function() {
  let secretNumber = 4;  
  let guess = Number(prompt("Guess A Number"));
  while (guess !== secretNumber) {
    if (guess < secretNumber) {
      guess = Number(prompt("Guess Higher"));
    } else {
      guess = Number(prompt("Guess Lower"));
    }
  }
  alert("You got it right!!");
}, 500);













