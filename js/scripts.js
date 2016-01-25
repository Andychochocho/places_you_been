function Place (city,state) {
  this.city = city;
  this.state = state;
}

Place.prototype.cityState = function() {
  return this.city + ", " + this.state;
}
