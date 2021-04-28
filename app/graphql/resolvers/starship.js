module.exports = {
  Starship: {
    films: (parent, __, {dataSources}) => {
      return dataSources.filmsAPI.getResourceByField(parent.films);
    },
    pilots: (parent, __, {dataSources}) => {
      return dataSources.charactersAPI.getResourceByField(parent.pilots);
    }
  }
};
