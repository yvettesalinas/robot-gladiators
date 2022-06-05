//this is a prompt
var playerName = window.prompt("What is your robot's name?");
//note the lack of quotation marks around playerName
console.log(playerName);
console.log("this logs a string, good for leaving yourself messages");
//this will do math and log 20
console.log(10+10);
//this will say what's in quotes and then our robot's name
console.log("Our robot's name is " + playerName);

// this creates a function named "fight"

function fight() {
    window.alert("The fight has begun!");
  }

//here we're calling the function "fight".  If we don't call it, nothing happens. 
//fight();
