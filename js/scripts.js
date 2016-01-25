                  // Business Logic

function Place (city,state,timeOfYear,landMark,notes) {
  this.city = city;
  this.state = state;
  this.timeOfYear = timeOfYear;
  this.landMark = landMark;
  this.notes = notes
}

// Place.prototype.cityState = function() {
//   return this.city + ", " + this.state;
// }

                // Userinterface

$(document).ready(function() {
  $("form#new-place").submit(function(){
    event.preventDefault();
    var inputtedCity = $('input#new-city').val();
    var inputtedState = $('input#new-state').val();
    var inputtedTimeOfYear = $('input#timeOfYear').val();
    var inputtedLandmark = $('input#landmark').val();
    var inputtedNotes = $('input#notes').val();
    var newPlace = new Place (inputtedCity, inputtedState, inputtedTimeOfYear, inputtedLandmark, inputtedNotes);

    $("ul#placesx").append("<li><span class='placesNames'>" + inputtedCity + "</li>");

    inputtedCity = $('input#new-city').val("");
    inputtedState = $('input#new-state').val("");
    inputtedTimeOfYear = $('input#timeOfYear').val("");
    inputtedLandmark = $('input#landmark').val("");
    inputtedNotes = $('input#notes').val("");

      $(".placesNames").last().click(function() {
      $("#hide-results").show();
      $(".city-text").text(newPlace.city);
      $(".state-text").text(newPlace.state);
      $(".timeOfYear-text").text(newPlace.timeOfYear);
      $(".landmark-text").text(newPlace.landMark);
      $(".notes-text").text(newPlace.notes);
      });
    });
  });
