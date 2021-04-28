const Resource = require('./resource'),
      BASE_URL = 'https://swapi.dev/api/';

module.exports = function dataSources() {
  return {
    charactersAPI: new Resource(`${BASE_URL}people/`),
    filmsAPI: new Resource(`${BASE_URL}films/`),
    planetsAPI: new Resource(`${BASE_URL}planets/`),
    speciesAPI: new Resource(`${BASE_URL}species/`),
    starshipsAPI: new Resource(`${BASE_URL}starships/`),
    vehiclesAPI: new Resource(`${BASE_URL}vehicles/`)
  }
};
