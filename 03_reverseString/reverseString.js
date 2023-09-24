const reverseString = function(inputString) {

    let stringAsArray = inputString.split("");
    let reversedArray = [];



    for (let i = stringAsArray.length -1; i > -1; i--)
    {
         reversedArray.push(stringAsArray[i]);

    }

    let reverseString = reversedArray.join("");


    return(reverseString);



};

// Do not edit below this line
module.exports = reverseString;
