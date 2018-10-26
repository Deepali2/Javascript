window.setTimeout(function() {
let todos = ["TO DO LIST"];
let input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") listItems();
  else if (input === "new") newItem();
  else if (input === "delete") deleteItem();
  input = prompt("Check the console for the list. What would you like to do?");
}
alert("OK BYE BYE");

//helper functions

function listItems() {
  todos.forEach(function(todo, index) {
    console.log(index + ':' + todo);  
  });
}

function newItem() {
  let todo = prompt("What is your item to do?");
  todos.push(todo);
  console.log(listItems());
}

function deleteItem () {
  let index = Number(prompt("what is the index of the item you wish to delete?"));
  todos.splice(index, 1);
  console.log(listItems());
}

}, 500);