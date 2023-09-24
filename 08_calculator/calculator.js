const add = function(...numbers) {

  let total = numbers[0];

   for (let i=1; i< numbers.length;i++)
   {
    total = total + numbers[i];
   }
   return total;
	
};

const subtract = function(...numbers) {

  let total = numbers[0];

  for (let i=1; i< numbers.length;i++)
  {
   total = total - numbers[i];
  }
  return total;
	
};

const sum = function(numbers) {

let total = 0;
  
  if (numbers.length < 1)
  {
    return total;
  }

  else if (numbers.length == 1)
  {
    total = numbers[0];
    return total;
  }

  else (numbers.length >1)
  {
    for (let i = 0; i < numbers.length; i++)
    {
      total += numbers[i];
    }

    return total;
    
  }


   
    
    


  
};

const multiply = function(numbers) {

  let total = 0;

  if (numbers.length < 1)
  {
    console.log("FIZZ");
    return total;
    
  }

  else if (numbers.length == 1)
  {
    total = numbers[0];
    console.log("BUZZ");
    return total;
  }

  else if (numbers.length > 1)
  {

    let total = 1;

    for (let i = 0; i < numbers.length; i++)
    {
      total = total * numbers[i];
    }
    return total;
  }

};

const power = function(baseNumber, toPowerNumber) {

  let total = 1;


    for (let i = 0; i < toPowerNumber; i++)
    {
      total = total * baseNumber;
    }

    return total;


  
	
};

const factorial = function(baseNumber) {

  //The factorial of a number is the product of all 
  //the integers from 1 to that number. 
  //For example, the factorial of 6 is 1*2*3*4*5*6 = 720

// expect factorial 0 = 0;
//expect factorial 1 = 1;
//expect factorial 2 = 2;
//expect factorial 5 = 120;

let total;

if (baseNumber > 0)
{

 total = 1;

  for (let i = 1; i <= baseNumber; i++)
  {
    total = total * i;
  }
}
	
else
{
  total = 1;
}

return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
