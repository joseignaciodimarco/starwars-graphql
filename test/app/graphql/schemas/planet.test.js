const planetSchema = require('../../../../app/graphql/schemas/planet');

test('planetSchema shoulbe be an instring', () => {
  expect(planetSchema).toEqual(`
  "A planet."
  type Planet {
    "The diameter of the planet in kilometers."
    diameter: String!
    "The climate of the planet. Comma-seperated if diverse."
    climate: String!
    "The percentage of the planet surface that is naturally occuring water or bodies of water."
    surface_water: String!
    "The name of the planet."
    name: String!
    "The ISO 8601 date format of the time that the resource was created.",
    created: String
    "The hypermedia URL of the resource."
    url: String!
    "The number of standard hours it takes for the planet to complete a single rotation on its axis."
    rotation_period: String!
    "the ISO 8601 date format of the time that the resource was edited."
    edited: String!
    "the terrain of the planet. Comma-seperated if diverse."
    terrain: String!
    "A number denoting the gravity of the planet. Where 1 is normal."
    gravity: String!
    "The number of standard days it takes for the planet to complete a single orbit of its local star."
    orbital_period: String!
    "An array of Films that the planet has appeared in."
    films: [Film]!
    "An array of People that live on the planet."
    residents: [Character]!
    "The average populationof sentient beings inhabiting the planet."
    population: String!
  }
`);
});