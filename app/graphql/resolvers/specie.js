module.exports = {
  Specie: {
    films: (parent, __, {dataSources}) => {
      return dataSources.filmsAPI.getResourceByField(parent.films);
    },
    homeworld: (parent, __, {dataSources}) => {
      return dataSources.planetsAPI.getResourceById(parent.homeworld);
    },
    people: (parent, __, {dataSources}) => {
      return dataSources.charactersAPI.getResourceByField(parent.people);
    }
  }
};
