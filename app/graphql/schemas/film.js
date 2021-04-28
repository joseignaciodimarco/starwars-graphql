module.exports = `
  "A Star Wars film"
  type Film {
    "The starship resources featured within the film."
    starships: [Starship]!
    "the ISO 8601 date format of the time that the resource was edited."
    edited: String!
    "The planet resources featured within the film."
    planets: [Planet]!
    "The producer(s) of the film."
    producer: String!
    "The title of the film."
    title: String!
    "The url of the resource"
    url: String!
    "The release date at original creator country."
    release_date: String!
    "The vehicle resources featured within the film."
    vehicles: [Vehicle]!
    "The episode number of the film."
    episode_id: Int!
    "The director of the film."
    director: String!
    "The ISO 8601 date format of the time that the resource was created."
    created: String!
    "The opening crawl text at the beginning of the film."
    opening_crawl: String!
    "The people resources featured within the film."
    characters: [Character]!
    "The species resources featured within the film."
    species: [Specie]
  }
`;
