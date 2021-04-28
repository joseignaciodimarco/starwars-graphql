let starshipResolver,
    Starship,
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

  starshipResolver = require('../../../../app/graphql/resolvers/starship');
  Starship = starshipResolver.Starship;
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('starship', () => {
  test('starshipResolver should be an Object', () => {
    expect(starshipResolver).toBeInstanceOf(Object);
  });
  test('starshipResolver Object keys', () => {
    expect(Object.keys(starshipResolver)).toEqual(['Starship']);
  });
  test('starshipResolver.Starship should be an Object', () => {
    expect(starshipResolver.Starship).toBeInstanceOf(Object);
  });
  test('starshipResolver.Starship Object keys', () => {
    expect(Object.keys(starshipResolver.Starship)).toEqual(['films', 'pilots']);
  });

  describe('Starship keys', () => {
    describe('films', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('films');
        result = Starship.films({films: 'films'}, null, dataSourcesObject);
      });

      test('films should be an instance of a Function', () => {
        expect(Starship.films).toBeInstanceOf(Function);
      });
      test('films should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['films']]);
      });
      test('return value', () => {
        expect(result).toEqual('films');
      });
    });

    describe('pilots', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('pilots');
        result = Starship.pilots({pilots: 'pilots'}, null, dataSourcesObject);
      });

      test('pilots should be an instance of a Function', () => {
        expect(Starship.pilots).toBeInstanceOf(Function);
      });
      test('pilots should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['pilots']]);
      });
      test('return value', () => {
        expect(result).toEqual('pilots');
      });
    });
  });
});
