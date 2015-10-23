describe('beerCountdown', function() {
  it("returns the first line of the song with the number input inserted where it goes", function() {
    expect(beerCountdown(99)).to.equal("99 bottles of beer on the wall, 99 bottles of beer. Take one down, pass it around, 99 bottles of beer on the wall!");
  });
});
