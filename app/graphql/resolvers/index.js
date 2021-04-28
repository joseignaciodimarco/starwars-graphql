const Character = require('./character'),
      Film = require('./film'),
      Planet = require('./planet'),
      Query = require('./query'),
      Specie = require('./specie'),
      Starship = require('./starship'),
      Vehicle = require('./vehicle');

module.exports = {
  ...Character,
  ...Film,
  ...Planet,
  ...Query,
  ...Specie,
  ...Starship,
  ...Vehicle
}