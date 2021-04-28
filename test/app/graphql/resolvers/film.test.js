let filmResolver,
    Film,
    dataSourcesObject,
    getResourceByFieldMock,
    result;

beforeEach(() => {
  getResourceByFieldMock = {
    getResourceByField: jest.fn()
  };
  dataSourcesObject = {
    dataSources: {
      charactersAPI: getResourceByFieldMock,
      planetsAPI: getResourceByFieldMock,
      speciesAPI: getResourceByFieldMock,
      starshipsAPI: getResourceByFieldMock,
      vehiclesAPI: getResourceByFieldMock
    }
  };

  filmResolver = require('../../../../app/graphql/resolvers/film');
  Film = filmResolver.Film;
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('film', () => {
  test('characterResolver should be an Object', () => {
    expect(filmResolver).toBeInstanceOf(Object);
  });
  test('characterResolver Object keys', () => {
    expect(Object.keys(filmResolver)).toEqual(['Film']);
  });
  test('filmResolver.Film should be an Object', () => {
    expect(filmResolver.Film).toBeInstanceOf(Object);
  });
  test('filmResolver.Film Object keys', () => {
    expect(Object.keys(filmResolver.Film)).toEqual(['characters', 'planets', 'species', 'starships', 'vehicles']);
  });

  describe('Film attributes functions', () => {
    describe('characters', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('characters');
        result = Film.characters({characters: 'characters'}, null, dataSourcesObject);
      });

      test('characters should be an instance of a Function', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['characters']]);
      });
      test('characters should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['characters']]);
      });
      test('return value', () => {
        expect(result).toEqual('characters');
      });
    });

    describe('planets', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('planets');
        result = Film.planets({planets: 'planets'}, null, dataSourcesObject);
      });

      test('planets should be an instance of Function', () => {
        expect(Film.planets).toBeInstanceOf(Function);
      });
      test('planets should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['planets']]);
      });
      test('return value', () => {
        expect(result).toEqual('planets');
      });
    });
    
    describe('species', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('species');
        result = Film.species({species: 'species'}, null, dataSourcesObject);
      });

      test('species should be an instance of a Function', () => {
        expect(Film.species).toBeInstanceOf(Function);
      });
      test('species should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['species']]);
      });
      test('return value', () => {
        expect(result).toEqual('species');
      });
    });
   
    describe('starships', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('starships');
        result = Film.starships({starships: 'starships'}, null, dataSourcesObject);
      });

      test('starships should be an instance of a Function', () => {
        expect(Film.starships).toBeInstanceOf(Function);
      });
      test('starships should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['starships']]);
      });
      test('return value', () => {
        expect(result).toEqual('starships');
      });
    });
    
    describe('vehicles', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('vehicles');
        result = Film.vehicles({vehicles: 'vehicles'}, null, dataSourcesObject);
      });

      test('vehicles should be an instance of a Function', () => {
        expect(Film.vehicles).toBeInstanceOf(Function);
      });
      test('vehicles should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['vehicles']]);
      });
      test('return value', () => {
        expect(result).toEqual('vehicles');
      });
    });
    
  });
});
