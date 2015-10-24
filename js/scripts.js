var roundOne = function(number) {
  var numberLower = number - 1;
  return number + " bottles of beer on the wall, " + number + " bottles of beer! " + "Take one down, pass it around, " + numberLower + " bottles of beer on the wall!\n";
};
var nextRounds = function(number) {
  var oneBottle = 1;
  if (number > 2) {
    return roundOne(number) + nextRounds(number-1);
  } else if (number = 2) {
    return number + " bottles of beer on the wall, " + number + " bottles of beer! " + "Take one down, pass it around, " + oneBottle + " bottle of beer on the wall!\n";
  } else if (number = 1) {
    return oneBottle + " bottle of beer on the wall, " + oneBottle + " bottle of beer!" + " Take one down, pass it around" + "no more bottles of beer on the wall!\n";
  } else {
    return "";
  }
};
var endLine = function(number) {
    return "No more bottles of beer on the wall, no more bottles of beer! Go to the store and buy some more, " + number + " bottles of beer on the wall!\n";
};
var beerCountdown = function(number) {
  return roundOne(number) + nextRounds(number) + endLine(number);
}

$(document).ready(function() {
  $("form#beer-number").submit(function(event) {
    var number = parseInt($("input#number").val());
    var ninetyNine = beerCountdown(number);

    $("#input").text(number);
    $(".result").show();

    event.preventDefault();
  });
});
