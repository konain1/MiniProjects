// import fetch from "node-fetch";

import inquirer from 'inquirer';



inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
    {
      name: 'anime',
      message: 'What is your favorite anime?'
    }
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
    console.info('Answer:', answers.anime);
  });