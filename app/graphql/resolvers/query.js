module.exports = {
  Query: {
    characters: (_, {pageNumber}, {dataSources}) => {
      return dataSources.charactersAPI.getAllResources(pageNumber);
    },
    character: (_, {id}, {dataSources}) => {
      return dataSources.charactersAPI.getResourceById(id);
    },
    films: (_, __, {dataSources}) => {
      return dataSources.filmsAPI.getAllResources();
    },
    film: (_, {id}, {dataSources}) => {
      return dataSources.filmsAPI.getResourceById(id);
    },
    planets: (_, {pageNumber}, {dataSources}) => {
      return dataSources.planetsAPI.getAllResources(pageNumber);
    },
    planet: (_, {id}, {dataSources}) => {
      return dataSources.planetsAPI.getResourceById(id);
    },
    species: (_, {pageNumber}, {dataSources}) => {
      return dataSources.speciesAPI.getAllResources(pageNumber);
    },
    specie: (_, {id}, {dataSources}) => {
      return dataSources.speciesAPI.getResourceById(id);
    },
    starships: (_, {pageNumber}, {dataSources}) => {
      return dataSources.starshipsAPI.getAllResources(pageNumber);
    },
    starship: (_, {id}, {dataSources}) => {
      return dataSources.starshipsAPI.getResourceById(id);
    },
    vehicles: (_, {pageNumber}, {dataSources}) => {
      return dataSources.vehiclesAPI.getAllResources(pageNumber);
    },
    vehicle: (_, {id}, {dataSources}) => {
      return dataSources.vehiclesAPI.getResourceById(id);
    }
  }
};
