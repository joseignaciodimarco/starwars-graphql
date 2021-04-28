module.exports = {
  Film: {
    characters: (parent, __, {dataSources}) => {
      return dataSources.charactersAPI.getResourceByField(parent.characters);
    },
    planets: (parent, __, {dataSources}) => {
      return dataSources.planetsAPI.getResourceByField(parent.planets);
    },
    species: (parent, __, {dataSources}) => {
      return dataSources.speciesAPI.getResourceByField(parent.species);
    },
    starships: (parent, __, {dataSources}) => {
      return dataSources.starshipsAPI.getResourceByField(parent.starships);
    },
    vehicles: (parent, __, {dataSources}) => {
      return dataSources.vehiclesAPI.getResourceByField(parent.vehicles);
    }
  }
};
