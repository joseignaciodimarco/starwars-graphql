const querySchema = require('../../../../app/graphql/schemas/query');

test('querySchema shoulbe be an instring', () => {
  expect(querySchema).toEqual(`
  type Query {
    "Get all characters. It returns page 1 when pageNumber is null"
    characters(pageNumber: Int): [Character!]!
    "Get character by ID"
    character(id: ID!): Character
    "Get all films"
    films: [Film]!
    "Get film by ID"
    film(id: ID!): Film
    "Get all planets. It returns page 1 when pageNumber is null"
    planets(pageNumber: Int): [Planet]!
    "Get planet by ID"
    planet(id: ID!): Planet
    "Get all species. It returns page 1 when pageNumber is null"
    species(pageNumber: Int): [Specie]!
    "Get specie by ID"
    specie(id: ID!): Specie
    "Get all vehicles. It returns page 1 when pageNumber is null"
    vehicles(pageNumber: Int): [Vehicle]!
    "Get vehicle by ID"
    vehicle(id: ID!): Vehicle
    "Get all starships. It returns page 1 when pageNumber is null"
    starships(pageNumber: Int): [Starship]!
    "Get starship by ID"
    starship(id: ID!): Starship
  }
`);
});