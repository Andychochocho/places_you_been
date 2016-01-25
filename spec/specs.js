describe('Place', function() {
  it("will create function to display places", function(){
    var testPlace = new Place("Portland","Oregon");
    expect(testPlace.city).to.equal("Portland");
    expect(testPlace.state).to.equal("Oregon");
  });
  it("will join our city and state together",function(){
    var testPlace = new Place("Seattle","Washington");
    expect(testPlace.cityState()).to.equal("Seattle, Washington");
  })
});
