// import fetch from "node-fetch";

import inquirer from 'inquirer';
import cp from 'child_process';




  function displaylist(){


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
    console.log("javascript  html/css java linux")
    backList()
  }else  if(ans.selection == "about"){
    console.log(`I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.
    Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
    
    A key strength is communication; building strong relationships with people in order to deliver the best results.
    
    Recently, I completed an Open degree, including Business and Design modules at the Open University and I am now fully employed by Clearly Presented as a Digital Media Manager.`)
    backList()
  }else {
    cp.execSync('start chrome https://github.com/konain1')
    backList()
  }
});

  }

  displaylist()



  function backList(){

    inquirer
  .prompt([
    {
      type:"list",
      name: 'selection',
      choices: ["Go back","exit"]
    }
  ])
  .then(function(ans){
    if(ans.selection == 'Go back'){
        displaylist();
    }else if(ans.selection == "exit"){
        console.log("resume closed")
    }
  })

}
