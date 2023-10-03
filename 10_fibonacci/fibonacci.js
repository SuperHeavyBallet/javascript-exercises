const fibonacci = function(inputNumber) {

    let array = [];
    array[0] = 0;
    array[1] = 1;

    if (inputNumber > 0) {

    for (let i = 2; i < inputNumber+1; i++)
    {
        array[i] = array[i-1] + array[i-2];
    }

    console.log(array);
    console.log(array[inputNumber]);

    return array[inputNumber];
}

return "OOPS";

};

// Do not edit below this line
module.exports = fibonacci;
