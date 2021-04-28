let vehicleResolver,
    Vehicle,
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

  vehicleResolver = require('../../../../app/graphql/resolvers/vehicle');
  Vehicle = vehicleResolver.Vehicle;
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('vehicle', () => {
  test('vehicleResolver should be an Object', () => {
    expect(vehicleResolver).toBeInstanceOf(Object);
  });
  test('vehicleResolver Object keys', () => {
    expect(Object.keys(vehicleResolver)).toEqual(['Vehicle']);
  });
  test('vehicleResolver.Vehicle should be an Object', () => {
    expect(vehicleResolver.Vehicle).toBeInstanceOf(Object);
  });
  test('vehicleResolver.Vehicle Object keys', () => {
    expect(Object.keys(vehicleResolver.Vehicle)).toEqual(['films', 'pilots']);
  });

  describe('Vehicle keys', () => {
    describe('films', () => {
      beforeEach(() => {
        getResourceByFieldMock.getResourceByField.mockReturnValue('films');
        result = Vehicle.films({films: 'films'}, null, dataSourcesObject);
      });

      test('films should be an instance of a Function', () => {
        expect(Vehicle.films).toBeInstanceOf(Function);
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
        result = Vehicle.pilots({pilots: 'pilots'}, null, dataSourcesObject);
      });

      test('pilots should be an instance of a Function', () => {
        expect(Vehicle.pilots).toBeInstanceOf(Function);
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
