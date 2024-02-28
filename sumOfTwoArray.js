async function getInput() {
    process.stdin.setEncoding('utf-8');
  
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    //Message for input
    console.log('Please input number by use spacebar for splice');
  
    const inputData = await new Promise(resolve => {
      readline.question('', input => {
        resolve(input);
      });
    });
  
    readline.close();

    const numbersArray = inputData.trim().split(' ').map(Number);
    
    //Message output
    console.log('Input', numbersArray);
  }
  
  getInput();
  