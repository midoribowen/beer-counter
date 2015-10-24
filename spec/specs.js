describe('roundOne', function() {
  it("returns the first line of the song with the number input at the the 1st and 2nd position", function() {
    expect(roundOne(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! ");
  });
  it("returns the first line of the song with the next lower number in the 3rd position", function() {
    expect(roundOne(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! ");
  });
});
describe('nextRounds', function() {
  it("returns the all except the last two lines of the song with the numbers going lower using conditionals", function() {
    expect(nextRounds(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! 4 bottles of beer on the wall, 4 bottles of beer! Take one down, pass it around, 3 bottles of beer on the wall! 3 bottles of beer on the wall, 3 bottles of beer! Take one down, pass it around, 2 bottles of beer on the wall! 2 bottles of beer on the wall, 2 bottles of beer! Take one down, pass it around, 1 bottle of beer on the wall! ");
  });
  it("returns the last two lines of the song, before the ending line, using singular bottle instead of bottles", function() {
    expect(nextRounds(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! 4 bottles of beer on the wall, 4 bottles of beer! Take one down, pass it around, 3 bottles of beer on the wall! 3 bottles of beer on the wall, 3 bottles of beer! Take one down, pass it around, 2 bottles of beer on the wall! 2 bottles of beer on the wall, 2 bottles of beer! Take one down, pass it around, 1 bottle of beer on the wall! " );
  });
});
describe('endLine', function() {
  it("returns the ending line of the song with the starting number at the end", function() {
    expect(endLine(5)).to.equal("No more bottles of beer on the wall, no more bottles of beer! Go to the store and buy some more, 5 bottles of beer on the wall! ");
  });
});
describe('beerCountdown', function() {
  it("returns the whole song, 99 Bottles of Beer on the Wall, from start to finish", function() {
    expect(beerCountdown(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! 5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! 4 bottles of beer on the wall, 4 bottles of beer! Take one down, pass it around, 3 bottles of beer on the wall! 3 bottles of beer on the wall, 3 bottles of beer! Take one down, pass it around, 2 bottles of beer on the wall! 2 bottles of beer on the wall, 2 bottles of beer! Take one down, pass it around, 1 bottle of beer on the wall! No more bottles of beer on the wall, no more bottles of beer! Go to the store and buy some more, 5 bottles of beer on the wall! ");
  });
});
