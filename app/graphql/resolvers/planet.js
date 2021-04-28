module.exports = {
  Planet: {
    films: (parent, __, {dataSources}) => {
      return dataSources.filmsAPI.getResourceByField(parent.films);
    },
    residents: (parent, __, {dataSources}) => {
      return dataSources.charactersAPI.getResourceByField(parent.residents);
    }
  }
};
