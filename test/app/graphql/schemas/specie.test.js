const specieSchema = require('../../../../app/graphql/schemas/specie');

test('specieSchema shoulbe be an instring', () => {
  expect(specieSchema).toEqual(`
  "A species within the Star Wars universe"
  type Specie {
    "The ISO 8601 date format of the time that the resource was edited."
    edited: String!
    "The name of the species."
    name: String!
    "The classification of the species."
    classification: String!
    "An array of People that are a part of the species."
    people: [Character]!
    "A comma-seperated string of common eye colors for the species, none if the species does not typically have eyes."
    eye_colors: String!
    "The ISO 8601 date format of the time that the resource was created."
    created: String!
    "The designation of the species."
    designation: String!
    "A comma-seperated string of common skin colors for the species, none if the species does not typically have skin."
    skin_colors: String!
    "The language commonly spoken by the species."
    language: String!
    "The hypermedia URL of the resource."
    url: String!
    "A comma-seperated string of common hair colors for the species, none if the species does not typically have hair."
    hair_colors: String!
    "The planet resource, a planet that the species originates from."
    homeworld: Planet
    "An array of Films that the species has appeared in."
    films: [Film]!
    "The average lifespan of the species in years."
    average_lifespan: String!
    "The average height of the person in centimeters."
    average_height: String!
  }`);
});