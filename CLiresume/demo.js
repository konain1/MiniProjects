// import fetch from "node-fetch";

import inquirer from 'inquirer';



inquirer
  .prompt([
    {
      type:"list",
      name: 'selection',
      choices: ["skills","about","projects"]
    }
  ])
  .then(function(ans) {
    if(ans.selection == 'skills'){
      console.log("skills selected")
    }else  if(ans.selection == "about"){
      console.log("about selected")
    }else {
      console.log("projects selected")
    }
  });