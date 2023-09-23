const repeatString = function(stringToRepeat, timesToRepeat) {
    
    
   
if(timesToRepeat >= 0)
{    
    const originalString = stringToRepeat;
    const repeatedString = originalString.repeat(timesToRepeat);
    
    return repeatedString;
}
else
{
    
    return 'ERROR';
}

};

// Do not edit below this line
module.exports = repeatString;
