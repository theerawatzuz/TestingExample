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

    //Convert Array data to custom sort
    const numberCustomSort = numbersArray.slice().sort((a,b) => {
        //Sort odd number first
        if(a % 2 !== 0 && b % 2 !== 0){
            return a - b;
        }
        //Sort even number after odd numbers
        else if (a % 2 === 0 && b % 2 === 0){
            return a - b;
        }
        //Keep odd numbers before even numbers
        else if (a % 2 !== 0 && b% 2 === 0){
            return -1;
        }
        else {
            return 1;
        }
    });

        //Message output 
        console.log('Input', numbersArray);
        console.log('Output', numberCustomSort);

}

getInput();