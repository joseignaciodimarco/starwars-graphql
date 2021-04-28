let planetResolver,
    Planet,
    dataSourcesObject,
    getResourceByFieldMock,
    result;

beforeEach(() => {
  getResourceByFieldMock = {
    getResourceByField: jest.fn()
  };
  dataSourcesObject = {
    dataSources: {
      filmsAPI: getResourceByFieldMock,
      charactersAPI: getResourceByFieldMock
    }
  };

  planetResolver = require('../../../../app/graphql/resolvers/planet');
  Planet = planetResolver.Planet;
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('planet', () => {
  test('planetResolver should be an Object', () => {
    expect(planetResolver).toBeInstanceOf(Object);
  });
  test('planetResolver Object keys', () => {
    expect(Object.keys(planetResolver)).toEqual(['Planet']);
  });
  test('planetResolver.Planet should be an Object', () => {
    expect(planetResolver.Planet).toBeInstanceOf(Object);
  });
  test('planetResolver.Planet Object keys', () => {
    expect(Object.keys(planetResolver.Planet)).toEqual(['films', 'residents']);
  });

  describe('Planet keys', () => {
    describe('films', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('films');
        result = Planet.films({films: 'films'}, null, dataSourcesObject);
      });

      test('films should be an instance of a Function', () => {
        expect(Planet.films).toBeInstanceOf(Function);
      });
      test('films should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['films']]);
      });
      test('return value', () => {
        expect(result).toEqual('films');
      });
    });

    describe('residents', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('residents');
        result = Planet.residents({residents: 'residents'}, null, dataSourcesObject);
      });

      test('residents should be an instance of a Function', () => {
        expect(Planet.residents).toBeInstanceOf(Function);
      });
      test('residents should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['residents']]);
      });
      test('return value', () => {
        expect(result).toEqual('residents');
      });
    });
  });
});
