const characterSchema = require('../../../../app/graphql/schemas/character');

test('characterSchema shoulbe be an instring', () => {
  expect(characterSchema).toEqual(`
  "A person within the Star Wars universe"
  type Character {
    "The birth year of the person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin)."
    birth_year: String!
    "The ISO 8601 date format of the time that the resource was created."
    created: String!
    "the ISO 8601 date format of the time that the resource was edited."
    edited: String!
    "The eye color of the person."
    eye_color: String!
    "An array of urls of film resources that the person has been in."
    films: [Film]!
    "The gender of the person (if known)."
    gender: String!
    "The hair color of the person."
    hair_color: String!
    "The height of the person in meters."
    height: String!
    "The name of the planet where the person was born on."
    homeworld: Planet!
    "The mass of the person in kilograms."
    mass: String!
    "The name of the person."
    name: String!
    "The skin color of the person."
    skin_color: String!
    "The url of the species resource that the person is."
    species: [Specie]!
    "An array of starship resources that the person has piloted"
    starships: [Starship]!
    "The url of the resource"
    url: String!
    "An array of vehicle resources that the person has piloted"
    vehicles: [Vehicle]!
  }
`);
});