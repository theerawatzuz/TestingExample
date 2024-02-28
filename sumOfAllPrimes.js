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
    console.log('Input', targetNumber);
    
    for (let i = 2; i <= targetNumber; i++){
        if (isPrime(i)){
            console.log(i);
        }
    }
}
    //function check prime number?
    function isPrime(number){
        if (number <= 1){
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i === 0){
                return false;
            }
        }
        return true;
  


}

getInput();
