let characterResolver,
    Character,
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
      planetsAPI: {
        getResourceById: jest.fn()
      },
      speciesAPI: getResourceByFieldMock,
      starshipsAPI: getResourceByFieldMock,
      vehiclesAPI: getResourceByFieldMock
    }
  };

  characterResolver = require('../../../../app/graphql/resolvers/character');
  Character = characterResolver.Character;
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('character', () => {
  test('characterResolver should be an Object', () => {
    expect(characterResolver).toBeInstanceOf(Object);
  });
  test('characterResolver object keys', () => {
    expect(Object.keys(characterResolver)).toEqual(['Character']);
  });
  test('characterResolver.Character should be an Object', () => {
    expect(characterResolver.Character).toBeInstanceOf(Object);
  });
  test('characterResolver.Character keys', () => {
    expect(Object.keys(characterResolver.Character)).toEqual(['films', 'homeworld', 'species', 'starships', 'vehicles']);
  });

  describe('Character attributes functions', () => {
    describe('films', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('films');
        result = Character.films({films: 'films'}, null, dataSourcesObject)
      });

      test('it should be an instance of a function', () => {
        expect(Character.films).toBeInstanceOf(Function);
      });
      test('it should call getResourceByField', () => {
        expect(getResourceByFieldMock.getResourceByField.mock.calls).toEqual([['films']]);
      });
      test('return value', () => {
        expect(result).toEqual('films');
      });
    });

    describe('homeworld', () => {
      beforeEach(() => {
        dataSourcesObject.dataSources.planetsAPI.getResourceById.mockReturnValue('homeworlds');
        result = Character.homeworld({homeworld: 'homeworld'}, null, dataSourcesObject);
      });

      test('it should be an instance of a function', () => {
        expect(Character.homeworld).toBeInstanceOf(Function);
      });
      test('homeworld should call getResourceById', () => {
        expect(dataSourcesObject.dataSources.planetsAPI.getResourceById.mock.calls).toEqual([['homeworld']]);
      });
      test('return value', () => {
        expect(result).toEqual('homeworlds');
      });
    });

    describe('species', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('species');
        result = Character.species({species: 'species'}, null, dataSourcesObject);
      });

      test('it should be an instance of a function', () => {
        expect(Character.species).toBeInstanceOf(Function);
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
        result = Character.starships({starships: 'starships'}, null, dataSourcesObject);
      });

      test('it should be an instance of a function', () => {
        expect(Character.starships).toBeInstanceOf(Function);
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
        result = Character.vehicles({vehicles: 'vehicles'}, null, dataSourcesObject);
      });

      test('it should be an instance of a function', () => {
        expect(Character.vehicles).toBeInstanceOf(Function);
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
