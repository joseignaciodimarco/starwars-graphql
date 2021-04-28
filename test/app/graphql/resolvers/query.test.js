let queryResolver,
    Query,
    dataSourcesObject,
    getResourceMock,
    result;

beforeEach(() => {
  getResourceMock = {
    getAllResources: jest.fn(),
    getResourceById: jest.fn()
  };
  dataSourcesObject = {
    dataSources: {
      charactersAPI: getResourceMock,
      filmsAPI: getResourceMock,
      planetsAPI: getResourceMock,
      speciesAPI: getResourceMock,
      starshipsAPI: getResourceMock,
      vehiclesAPI: getResourceMock
    }
  };

  queryResolver = require('../../../../app/graphql/resolvers/query');
  Query = queryResolver.Query;
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('query', () => {
  test('queryResolver should be an Object', () => {
    expect(queryResolver).toBeInstanceOf(Object);
  });
  test('queryResolver Object keys', () => {
    expect(Object.keys(queryResolver)).toEqual(['Query']);
  });
  test('queryResolver.Query should be an Object', () => {
    expect(queryResolver.Query).toBeInstanceOf(Object);
  });
  test('queryResolver.Query Object keys', () => {
    expect(Object.keys(queryResolver.Query)).toEqual(['characters', 'character', 'films', 'film', 'planets', 'planet', 'species', 'specie', 'starships', 'starship', 'vehicles', 'vehicle']);
  });

  describe('Query keys', () => {
    describe('characters', () => {
      beforeEach(() => {
        getResourceMock.getAllResources.mockReturnValue('characters');
        result = Query.characters(null, {pageNumber: '1'}, dataSourcesObject);
      });

      test('characters should be a Function', () => {
        expect(Query.characters).toBeInstanceOf(Function);
      });
      test('characters should call getAllResources', () => {
        expect(getResourceMock.getAllResources.mock.calls).toEqual([['1']]);
      });
      test('return value', () => {
        expect(result).toEqual('characters');
      });
    });

    describe('character', () => {
      beforeEach(() => {
        getResourceMock.getResourceById.mockReturnValue('character');
        result = Query.character(null, {id: 'ID_1'}, dataSourcesObject);
      });

      test('character should be an instance of a Function', () => {
        expect(Query.character).toBeInstanceOf(Function);
      });
      test('character should call getResourceById', () => {
        expect(getResourceMock.getResourceById.mock.calls).toEqual([['ID_1']]);
      });
      test('return value', () => {
        expect(result).toEqual('character');
      });
    });

    describe('films', () => {
      beforeEach(() => {
        getResourceMock.getAllResources.mockReturnValue('films');
        result = Query.films(null, null, dataSourcesObject);
      });

      test('films should be an instance of a Function', () => {
        expect(Query.films).toBeInstanceOf(Function);
      });
      test('films should call getAllResources', () => {
        expect(getResourceMock.getAllResources.mock.calls).toEqual([[]]);
      });
      test('return value', () => {
        expect(result).toEqual('films');
      });
    });

    describe('film', () => {
      beforeEach(() => {
        getResourceMock.getResourceById.mockReturnValue('film');
        result = Query.film(null, {id: 'ID_1'}, dataSourcesObject);
      });

      test('film should be an instance of a Function', () => {
        expect(Query.film).toBeInstanceOf(Function);
      });
      test('film should call getResourceById', () => {
        expect(getResourceMock.getResourceById.mock.calls).toEqual([['ID_1']]);
      });
      test('return value', () => {
        expect(result).toEqual('film');
      });
    });

    describe('planets', () => {
      beforeEach(() => {
        getResourceMock.getAllResources.mockReturnValue('planets');
        result = Query.planets(null, {pageNumber: '1'}, dataSourcesObject);
      });

      test('planets should be an instance of a Function', () => {
        expect(Query.planets).toBeInstanceOf(Function);
      });
      test('planets should call getAllResources', () => {
        expect(getResourceMock.getAllResources.mock.calls).toEqual([['1']]);
      });
      test('return value', () => {
        expect(result).toEqual('planets');
      });
    });

    describe('planet', () => {
      beforeEach(() => {
        getResourceMock.getResourceById.mockReturnValue('planet');
        result = Query.planet(null, {id: 'ID_1'}, dataSourcesObject);
      });

      test('planet should be an instance of a Function', () => {
        expect(Query.planet).toBeInstanceOf(Function);
      });
      test('planet should call getResourceById', () => {
        expect(getResourceMock.getResourceById.mock.calls).toEqual([['ID_1']]);
      });
      test('return value', () => {
        expect(result).toEqual('planet');
      });
    });

    describe('species', () => {
      beforeEach(() => {
        getResourceMock.getAllResources.mockReturnValue('species');
        result = Query.species(null, {pageNumber: '1'}, dataSourcesObject);
      });

      test('species should be an instance of a Function', () => {
        expect(Query.species).toBeInstanceOf(Function);
      });
      test('species should call getAllResources', () => {
        expect(getResourceMock.getAllResources.mock.calls).toEqual([['1']]);
      });
      test('return value', () => {
        expect(result).toEqual('species');
      });
    });

    describe('specie', () => {
      beforeEach(() => {
        getResourceMock.getResourceById.mockReturnValue('specie');
        result = Query.specie(null, {id: 'ID_1'}, dataSourcesObject);
      });

      test('specie should be an instance of a Function', () => {
        expect(Query.specie).toBeInstanceOf(Function);
      });
      test('specie should call getResourceById', () => {
        expect(getResourceMock.getResourceById.mock.calls).toEqual([['ID_1']]);
      });
      test('return value', () => {
        expect(result).toEqual('specie');
      });
    });

    describe('starships', () => {
      beforeEach(() => {
        getResourceMock.getAllResources.mockReturnValue('starships');
        result = Query.starships(null, {pageNumber: '1'}, dataSourcesObject);
      });

      test('starships should be an instance of a Function', () => {
        expect(Query.starships).toBeInstanceOf(Function);
      });
      test('starships should call getAllResources', () => {
        expect(getResourceMock.getAllResources.mock.calls).toEqual([['1']]);
      });
      test('return value', () => {
        expect(result).toEqual('starships');
      });
    });

    describe('starship', () => {
      beforeEach(() => {
        getResourceMock.getResourceById.mockReturnValue('starship');
        result = Query.starship(null, {id: 'ID_1'}, dataSourcesObject);
      });

      test('starship should be an instance of a Function', () => {
        expect(Query.starship).toBeInstanceOf(Function);
      });
      test('starship should call getResourceById', () => {
        expect(getResourceMock.getResourceById.mock.calls).toEqual([['ID_1']]);
      });
      test('return value', () => {
        expect(result).toEqual('starship');
      });
    });
    
    describe('vehicles', () => {
      beforeEach(() => {
        getResourceMock.getAllResources.mockReturnValue('vehicles');
        result = Query.vehicles(null, {pageNumber: '1'}, dataSourcesObject);
      });

      test('vehicles should be an instance of a Function', () => {
        expect(Query.vehicles).toBeInstanceOf(Function);
      });
      test('vehicles should call getAllResources', () => {
        expect(getResourceMock.getAllResources.mock.calls).toEqual([['1']]);
      });
      test('return value', () => {
        expect(result).toEqual('vehicles');
      });
    });
    
    describe('vehicle', () => {
      beforeEach(() => {
        getResourceMock.getResourceById.mockReturnValue('vehicle');
        result = Query.vehicle(null, {id: 'ID_1'}, dataSourcesObject);
      });

      test('vehicle should be an instance of a Function', () => {
        expect(Query.vehicle).toBeInstanceOf(Function);
      });
      test('vehicle should call getResourceById', () => {
        expect(getResourceMock.getResourceById.mock.calls).toEqual([['ID_1']]);
      });
      test('return value', () => {
        expect(result).toEqual('vehicle');
      });
    });
  });
});
