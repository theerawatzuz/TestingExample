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

    console.log('Please input Target:');

    const targetData = await new Promise(resolve => {
        readline.question('', input => resolve(input));
      });

  
    readline.close();

    const numbersArray = inputData.trim().split(' ').map(Number);

    const targetNumber = Number(targetData.trim());

    //Message output convert to array
    console.log('Input', numbersArray);
    //Message output target
    console.log('Target', targetNumber);

    //Function sum array
    let found = false;
    for (let i = 0; i < numbersArray.length; i++) {
        for (let j = i + 1; j < numbersArray.length; j++) {
            if (numbersArray[i] + numbersArray[j] === targetNumber) {
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }

    //Message output the result
    console.log('Output:', found);
}

getInput();
