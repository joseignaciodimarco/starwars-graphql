let dataSources,
    resource;

beforeEach(() => {
  resource = jest.fn();

  jest.setMock('../../../app/data-sources/resource.js', resource);

  dataSources = require('../../../app/data-sources');
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('dataSources', () => {
  test('dataSources should be a function', () => {
    expect(dataSources).toBeInstanceOf(Function);
  });

  test('dataSources should return an object', () => {
    expect(dataSources()).toBeInstanceOf(Object);
  });

  test('Resource constructor should be called 7 times', () => {
    dataSources();
    expect(resource.mock.calls).toEqual([
      [ 'https://swapi.dev/api/people/' ],
      [ 'https://swapi.dev/api/films/' ],
      [ 'https://swapi.dev/api/planets/' ],
      [ 'https://swapi.dev/api/species/' ],
      [ 'https://swapi.dev/api/starships/' ],
      [ 'https://swapi.dev/api/vehicles/' ]
    ]);
  });

  test('charactersAPI should be an instance of Resource', () => {
    const {charactersAPI} = dataSources();
    expect(charactersAPI).toBeInstanceOf(resource);
  });

  test('filmsAPI should be an instance of Resource', () => {
    const {filmsAPI} = dataSources();
    expect(filmsAPI).toBeInstanceOf(resource);
  });

  test('planetsAPI should be an instance of Resource', () => {
    const {planetsAPI} = dataSources();
    expect(planetsAPI).toBeInstanceOf(resource);
  });

  test('speciesAPI should be an instance of Resource', () => {
    const {speciesAPI} = dataSources();
    expect(speciesAPI).toBeInstanceOf(resource);
  });

  test('starshipsAPI should be an instance of Resource', () => {
    const {starshipsAPI} = dataSources();
    expect(starshipsAPI).toBeInstanceOf(resource);
  });

  test('vehiclesAPI should be an instance of Resource', () => {
    const {vehiclesAPI} = dataSources();
    expect(vehiclesAPI).toBeInstanceOf(resource);
  });
});
