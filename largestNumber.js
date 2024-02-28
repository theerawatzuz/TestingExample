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

    const largestNumber = numbersArray.slice().sort((a, b) => {
        //Convert numbers to strings
        const dataA = String(a);
        const dataB = String(b);

        //Compare the combination of strings
        return (dataB + dataA) - (dataA + dataB);
    });

    //Join the sorted strings to form the largest number
    const result = largestNumber.join('');

        //Message output 
        console.log('Input', numbersArray);
        console.log("Output:", result);
}

getInput();