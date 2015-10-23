var roundOne = function(number) {
  var numberLower = number - 1;
  return number + " bottles of beer on the wall, " + number + " bottles of beer! " + "Take one down, pass it around, " + numberLower + " bottles of beer on the wall! ";
};
var nextRounds = function(number) {
  var oneBottle = 1;
  if (number > 2) {
    return roundOne(number) + nextRounds(number-1);
  } else if (number <= 2) {
    return number + " bottles of beer on the wall, " + number + " bottles of beer! " + "Take one down pass it around, " + oneBottle + " bottle of beer on the wall! "
  } else {
    return "";
  }
};
