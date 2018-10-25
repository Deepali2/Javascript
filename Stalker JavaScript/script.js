window.setTimeout (function() {
  let firstName = prompt("Hi! What is your first name?");
  let lastName = prompt("What is your last name?");
  let age = prompt("Now tell me your age.");
  console.log(`Your name is ${firstName} ${lastName}. You are ${age} years old. You are my friend`);
  alert(`${firstName} ${lastName} age ${age}. Will you be my friend? If yes, then check the console. I have printed your name and age on it!!!`);
  let days = age * 365.25;
  alert(`Hey my friend. I have been learning how to multiply. Since you told me that you are ${age} years old, I can tell you that you are also roughly ${days} days old.`)


}, 500)


