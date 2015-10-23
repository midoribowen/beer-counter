describe('roundOne', function() {
  it("returns the first line of the song with the number input at the the 1st and 2nd position", function() {
    expect(roundOne(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! ");
  });
  it("returns the first line of the song with the next lower number in the 3rd position", function() {
    expect(roundOne(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! ");
  });
});
describe('nextRounds', function() {
  it("returns the all except the last two lines of the song with the numbers going lower using a loop", function() {
    expect(nextRounds(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! 4 bottles of beer on the wall, 4 bottles of beer! Take one down, pass it around, 3 bottles of beer on the wall! 3 bottles of beer on the wall, 3 bottles of beer! Take one down, pass it around, 2 bottles of beer on the wall! 2 bottles of beer on the wall, 2 bottles of beer! Take one down pass it around, 1 bottle of beer on the wall! ");
  });
  it("returns the last two lines of the song, before the ending line, using singular bottle instead of bottles", function() {
    expect(nextRounds(5)).to.equal("5 bottles of beer on the wall, 5 bottles of beer! Take one down, pass it around, 4 bottles of beer on the wall! 4 bottles of beer on the wall, 4 bottles of beer! Take one down, pass it around, 3 bottles of beer on the wall! 3 bottles of beer on the wall, 3 bottles of beer! Take one down, pass it around, 2 bottles of beer on the wall! 2 bottles of beer on the wall, 2 bottles of beer! Take one down pass it around, 1 bottle of beer on the wall! " )
  })
});
// describe('numberLower', function() {
//   it("returns the first line of the song with the next lower number at the end", function() {
//     expect(numberLower(3)).to.equal("3 bottles of beer on the wall, 3 bottles of beer. Take one down, pass it around, 2 bottles of beer on the wall!");
//   });
// });
// describe('beerCountdown', function() {
//   it("returns the whole song 99 Bottles of Beer on the wall starting at the number input by the user", function() {
//     expect(beerCountdown(3)).to.equal("3 bottles of beer on the wall, 3 bottles of beer. Take one down, pass it around, 2 bottles of beer on the wall! 2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall! 1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, 0 bottles of beer on the wall! No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 3 bottles of beer on the wall!");
//   });
// });
