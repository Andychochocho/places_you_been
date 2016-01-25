describe('Place', function() {
  it("will create function to display places", function(){
    var testPlace = new Place("Portland","Oregon","September","statue","It was boring.");
    expect(testPlace.city).to.equal("Portland");
    expect(testPlace.state).to.equal("Oregon");
    expect(testPlace.timeOfYear).to.equal("September")
    expect(testPlace.landMark).to.equal("statue")
    expect(testPlace.notes).to.equal("It was boring.")
  });
  // it("will join our city and state together",function(){
  //   var testPlace = new Place("Seattle","Washington");
  //   expect(testPlace.cityState()).to.equal("Seattle, Washington");
  // })
});
