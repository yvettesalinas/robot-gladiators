// //this is a prompt
// var playerName = window.prompt("What is your robot's name?");
// //note the lack of quotation marks around playerName
// console.log(playerName);
// console.log("this logs a string, good for leaving yourself messages");
// //this will do math and log 20
// console.log(10+10);
// //this will say what's in quotes and then our robot's name
// console.log("Our robot's name is " + playerName);

// // this creates a function named "fight"

// function fight() {
//     window.alert("The fight has begun!");
//   }

// //here we're calling the function "fight".  If we don't call it, nothing happens. 
// //fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log mulitple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //window prompt to see if the player wants to skip or continue with the fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable subtract the value of the 'playerAttack" from the value of "enemyHealth" and use that result to update the value in the "enemyHealth" variable
   
    enemyHealth = enemyHealth - playerAttack;

    console.log(
    //log a resulting message to the console so we know that it worked
    playerName + "attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //subtract the value of "enemyAttack" form the value of "playerHealth" and use that result to update the value in the "playerHealth" variable. 
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight () again
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option.  Try again!");
}
}
;

fight();