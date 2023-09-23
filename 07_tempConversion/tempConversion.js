const convertToCelsius = function(inputFahrenheit) {

  rawTemperature = ((inputFahrenheit - 32) * 5 /9);

  roundedTemperature = Math.round(rawTemperature * 10) / 10;

  return roundedTemperature;

};

const convertToFahrenheit = function(inputCelsius) {

  rawTemperature = (((inputCelsius * 9/5)) + 32);
  
  roundedTemperature = Math.round(rawTemperature * 10) / 10;

  return roundedTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
