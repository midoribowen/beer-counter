var roundOne = function(number) {
  var numberLower = number - 1;
  return number + " bottles of beer on the wall, " + number + " bottles of beer! " + "Take one down, pass it around, " + numberLower + " bottles of beer on the wall! ";
};
var nextRounds = function(number) {
  var oneBottle = 1;
  if (number > 2) {
    return roundOne(number) + nextRounds(number-1);
  } else if (number = 2) {
    return number + " bottles of beer on the wall, " + number + " bottles of beer! " + "Take one down, pass it around, " + oneBottle + " bottle of beer on the wall! ";
  } else if (number = 1) {
    return oneBottle + " bottle of beer on the wall, " + oneBottle + " bottle of beer!" + " Take one down, pass it around" + "no more bottles of beer on the wall! ";
  } else {
    return "";
  }
};
var endLine = function(number) {
    return "No more bottles of beer on the wall, no more bottles of beer! Go to the store and buy some more, " + number + " bottles of beer on the wall!";
};
var beerCountdown = function(number) {
  return roundOne(number) + nextRounds(number) + endLine(number);
}
