const apolloServer = {
  gql: jest.fn().mockReturnValue('schemas')
};

jest.setMock('apollo-server', apolloServer);
jest.setMock('../../../../app/graphql/schemas/character', 'characterSchema');
jest.setMock('../../../../app/graphql/schemas/film', 'filmSchema');
jest.setMock('../../../../app/graphql/schemas/planet', 'planetSchema');
jest.setMock('../../../../app/graphql/schemas/query', 'querySchema');
jest.setMock('../../../../app/graphql/schemas/specie', 'specieSchema');
jest.setMock('../../../../app/graphql/schemas/starship', 'starshipSchema');
jest.setMock('../../../../app/graphql/schemas/vehicle', 'vehicleSchema');

const schemas = require('../../../../app/graphql/schemas/');

test('gql calls', () => {
  expect(apolloServer.gql.mock.calls).toEqual([
    [
      [
        '\n  ', '\n  ',
        '\n  ', '\n  ',
        '\n  ', '\n  ',
        '\n  ', '\n'
      ],
      'characterSchema',
      'filmSchema',
      'planetSchema',
      'querySchema',
      'specieSchema',
      'starshipSchema',
      'vehicleSchema'
    ]
  ]);
});

test('return value', () => {
  expect(schemas).toEqual('schemas');
});
