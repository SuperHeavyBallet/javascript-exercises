const palindromes = function (originalString) {

    stringLower = originalString.toLowerCase();

    let punctuation = (/[\.,?!\s]/g);
    let stringStripped = originalString.replace(punctuation, "");
    let stringForwards = stringStripped.toLowerCase();

    

    
    
    arrayForwards = stringForwards.split("");

    /*
    for (let j = 0; j < arrayForwards.length; j++)
    {
        if (arrayForwards[j] === '!')
        {
            arrayForwards.splice(j,1);
        }
    
    }*/




    let arrayBackwards = [];
    
    //console.log(arrayForwards);

    for (let i = 0; i < arrayForwards.length; i++)
    {
      arrayBackwards.unshift(arrayForwards[i]);

    }


   

    stringForwards = arrayForwards.join("");
    stringBackwards = arrayBackwards.join("");

    console.log("For: "+ stringForwards);
    console.log("Back: " + stringBackwards);

    


    return stringBackwards === stringForwards;
};

// Do not edit below this line
module.exports = palindromes;
