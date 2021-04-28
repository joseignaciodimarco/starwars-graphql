module.exports = {
  Character: {
    films: (parent, __, {dataSources}) => {
      return dataSources.filmsAPI.getResourceByField(parent.films);
    },
    homeworld: (parent, __, {dataSources}) => {
      return dataSources.planetsAPI.getResourceById(parent.homeworld);
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
}
