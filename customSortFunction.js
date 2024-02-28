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

    const numbersArray = inputData.trim().split(' ').map(Number);

        //Message output convert to array
    console.log('Input', numbersArray);

}

getInput();