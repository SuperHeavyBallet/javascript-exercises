const getTheTitles = function(input) {

    console.log(input);

    let titleArray = [];

    for (let i = 0; i < input.length; i++)
    {

        titleArray[i] = input[i].title;
        
    }

    return titleArray;



};

// Do not edit below this line
module.exports = getTheTitles;
