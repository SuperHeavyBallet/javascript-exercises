const findTheOldest = function(inputArrayofObj) {
    
    let highestAge = 0;
    let highestName = "Bill";
    let personName = "Bob";

    
    const date = new Date();
    const year = date.getFullYear();



    for (let i =0; i < inputArrayofObj.length; i++)
    {
        let currentNameOfPerson = inputArrayofObj[i].name;
        let age = 0;

        if (inputArrayofObj[i].yearOfDeath)
        {
            age = inputArrayofObj[i].yearOfDeath - inputArrayofObj[i].yearOfBirth;
        }
        else
        {
            age = year - inputArrayofObj[i].yearOfBirth;
        }


        if (age > highestAge)
        {
            highestAge = age ;
            highestName = currentNameOfPerson;
        }
            
    }

    for (let j = 0; j < inputArrayofObj.length; j++)
    {
        if (highestName == inputArrayofObj[j].name)
        {
            console.log(inputArrayofObj[j]);
            return inputArrayofObj[j];
        }
    }

};

// Do not edit below this line
module.exports = findTheOldest;
