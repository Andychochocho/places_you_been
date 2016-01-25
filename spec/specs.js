// describe('Place', function() {
//   it("will create function to display places", function(){
//     var testPlace = new Place("Portland","Oregon");
//     expect(testPlace.city).to.equal("Portland");
//     expect(testPlace.state).to.equal("Oregon");
//   });
// });

describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Rita","Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });
});
