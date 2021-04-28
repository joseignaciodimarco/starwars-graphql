let specieResolver,
    Specie,
    dataSourcesObject,
    getResourceMock,
    result;

beforeEach(() => {
  getResourceMock = {
    getResourceByField: jest.fn(),
    getResourceById: jest.fn()
  };
  dataSourcesObject = {
    dataSources: {
      filmsAPI: getResourceMock,
      planetsAPI: getResourceMock,
      charactersAPI: getResourceMock
    }
  };

  specieResolver = require('../../../../app/graphql/resolvers/specie');
  Specie = specieResolver.Specie;
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('specie', () => {
  test('specieResolver should be an Object', () => {
    expect(specieResolver).toBeInstanceOf(Object);
  });
  test('specieResolver Object keys', () => {
    expect(Object.keys(specieResolver)).toEqual(['Specie']);
  });
  test('specieResolver.Specie should be an Object', () => {
    expect(specieResolver.Specie).toBeInstanceOf(Object);
  });
  test('specieResolver.Specie Object keys', () => {
    expect(Object.keys(specieResolver.Specie)).toEqual(['films', 'homeworld', 'people']);
  });

  describe('Specie keys', () => {
    describe('films', () => {
      beforeEach(() => {
        getResourceMock.getResourceByField.mockReturnValue('films');
        result = Specie.films({films: 'films'}, null, dataSourcesObject);
      });

      test('films should be an instance of a Function', () => {
        expect(Specie.films).toBeInstanceOf(Function);
      });
      test('films should call getResourceByField', () => {
        expect(getResourceMock.getResourceByField.mock.calls).toEqual([['films']]);
      });
      test('return value', () => {
        expect(result).toEqual('films');
      });
    });

    describe('homeworld', () => {
      beforeEach(() => {
        getResourceMock.getResourceById.mockReturnValue('homeworld');
        result = Specie.homeworld({homeworld: 'homeworld'}, null, dataSourcesObject);
      });

      test('homeworld should be an instance of a Function', () => {
        expect(Specie.homeworld).toBeInstanceOf(Function);
      });
      test('homeworld should call getResourceByField', () => {
        expect(getResourceMock.getResourceById.mock.calls).toEqual([['homeworld']]);
      });
      test('return value', () => {
        expect(result).toEqual('homeworld');
      });
    });

    describe('people', () => {
      beforeEach(() => {
        getResourceMock.getResourceByField.mockReturnValue('people');
        result = Specie.people({people: 'people'}, null, dataSourcesObject);
      });

      test('people should be an instance of a Function', () => {
        expect(Specie.people).toBeInstanceOf(Function);
      });
      test('people should call getResourceByField', () => {
        expect(getResourceMock.getResourceByField.mock.calls).toEqual([['people']]);
      });
      test('return value', () => {
        expect(result).toEqual('people');
      });
    });
  });
});
