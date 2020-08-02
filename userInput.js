//Requiring file system, inquirer and greeting.js file//
var fs = require ("fs");
var userQuestions = require("inquirer");
const Hello = require("./greeting.js");
//Commanding the greeting from greeting.js//
Hello ()
function userQuestions(inquirer){
//Inquirer is prompted to field questions//
inquirer.prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ])
  //Code functions for responses to the exchange of information in the prompt//
  .then(function(data) {
    var password = data.name;   
    
    fs.writeFile ('./userPassword.txt',data,function(err) {
      if (response.confirm === response.password) {
      console.log("Success! > userPassword.txt");
      }
      else {
      console.log("You forgot your password already?!");
      }
    }); 
      })}  
//End of Code//      
//YAYYYYYYYYY