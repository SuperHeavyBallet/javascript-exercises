const removeFromArray = function(array, ...elementsToRemove) {

    //Run Through Each Element in the given Array, if the Element Matches an Element in the Array of '...Elements to Remove', Change the element to X
  
for (let i = 0; i < array.length; i++)
{

    for (let j = 0; j < elementsToRemove.length; j++)
    {
        if (array[i] === elementsToRemove[j])
        {
            array[i] = 'x';

        }
}

    
}

// Create a new, empty Array and go through the now fully Marked given array. If an element is NOT marked as X, add it to the end of the new Array
let endArray = []

for (let i = 0; i < array.length; i++)
{
    if (array[i] !== 'x')
    {
        endArray.push(array[i]);
    }
}


return endArray;

};

// Do not edit below this line
module.exports = removeFromArray;
