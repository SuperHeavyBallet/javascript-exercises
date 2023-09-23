const sumAll = function(...numbersToAdd) {

    let newNumbersToAdd = [];

    if (numbersToAdd[0] < 0 || numbersToAdd[1] < 0 )
    {
        return 'ERROR';
        console.log("REACHED ERROR VIA NEGATIVE");
    }

    else if (typeof(numbersToAdd[1]) !== 'number')
    {
        return 'ERROR';
        console.log("REACHED ERROR VIA TYPE");
    }


    else
    {
    

        if (numbersToAdd[0] > numbersToAdd[1])
        {
          newNumbersToAdd[0] = numbersToAdd[1];
          newNumbersToAdd[1] = numbersToAdd[0];
        }

         else if (numbersToAdd[0] <= numbersToAdd[1])
        {
            newNumbersToAdd[0] = numbersToAdd[0];
           newNumbersToAdd[1] = numbersToAdd[1];
        }

        const firstInteger = newNumbersToAdd[0];
        const lastInteger =  newNumbersToAdd[newNumbersToAdd.length -1];
        let runningTotal = 0;


        for (let i = 0; i <= lastInteger; i++)
        {
            runningTotal = runningTotal + i;
            //console.log(runningTotal);
        }
    


        return runningTotal;
    }

};

// Do not edit below this line
module.exports = sumAll;
