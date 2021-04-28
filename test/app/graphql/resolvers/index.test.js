let resolvers;

describe('index', () => {
  beforeEach(() => {
    jest.setMock('../../../../app/graphql/resolvers/character', {character: 'character resolvers'});
    jest.setMock('../../../../app/graphql/resolvers/film', {film: 'film resolvers'});
    jest.setMock('../../../../app/graphql/resolvers/planet', {planet: 'planet resolvers'});
    jest.setMock('../../../../app/graphql/resolvers/query', {query: 'query resolvers'});
    jest.setMock('../../../../app/graphql/resolvers/specie', {specie: 'specie resolvers'});
    jest.setMock('../../../../app/graphql/resolvers/starship', {starship: 'starship resolvers'});
    jest.setMock('../../../../app/graphql/resolvers/vehicle', {vehicle: 'vehicle resolvers'});

    resolvers = require('../../../../app/graphql/resolvers/');
  });

  test('resolvers should be an instance of an Object', () => {
    expect(resolvers).toBeInstanceOf(Object);
  });
  test('resolvers value', () => {
    expect(resolvers).toEqual({
      character: 'character resolvers',
      film: 'film resolvers',
      planet: 'planet resolvers',
      query: 'query resolvers',
      specie: 'specie resolvers',
      starship: 'starship resolvers',
      vehicle: 'vehicle resolvers'
    });
  });
});