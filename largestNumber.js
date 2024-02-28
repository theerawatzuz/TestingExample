async function getInput() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    //Message on program run
    console.log('Please input numbers separated by space:');
  
    const inputData = await new Promise(resolve => {
      readline.question('', input => resolve(input));
    });

    readline.close();

    //Convert input data to array 
    const numbersArray = inputData.trim().split(' ').map(Number);

  

        //Message output 
        console.log('Input', numbersArray);

}

getInput();