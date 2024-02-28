async function getInput() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    //Message on program run
    console.log('Please input Target:');

    const targetData = await new Promise(resolve => {
        readline.question('', input => resolve(input));
      });

  
    readline.close();

    const targetNumber = Number(targetData.trim());


    //Message output target
    console.log('Input', targetData);
    console.log('Output', targetNumber);


}

getInput();
