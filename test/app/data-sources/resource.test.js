let ApolloDataSourceRest,
    Resource;

beforeEach(() => {
  ApolloDataSourceRest = {
    RESTDataSource: jest.fn()
  }

  jest.setMock('apollo-datasource-rest', ApolloDataSourceRest);

  Resource = require('../../../app/data-sources/resource');
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('Resource', () => {
  describe('constructor', () => {
    test('baseURL should be set', () => {
      const baseURL = 'https://swapi.dev/api/',
            resource = new Resource(baseURL);

      expect(resource.baseURL).toEqual(baseURL);
    });
  });

  describe('getAllResources', () => {
    describe('try', () => {
      let resourcePrototype;
      beforeEach(() => {
        resourcePrototype = Resource.prototype;

        resourcePrototype.get = jest.fn().mockReturnValue({
          results: ['result_1', 'result_2', 'result_3']
        });
        resourcePrototype.baseURL = 'https://swapi.dev/api/';
      });
      describe('get function', () => {
        test('pageNumber is not null', async () => {
          await resourcePrototype.getAllResources('5');
          expect(resourcePrototype.get.mock.calls).toEqual([['https://swapi.dev/api/?page=5']]);
        });
        test('pageNumber is null', async() => {
          await resourcePrototype.getAllResources();
          expect(resourcePrototype.get.mock.calls).toEqual([['https://swapi.dev/api/?page=1']]);
        });
      });

      test('return value', async () => {
        expect(await resourcePrototype.getAllResources()).toEqual(['result_1', 'result_2', 'result_3']);
      });
    });

    describe('catch', () => {
      let resourcePrototype,
          err;
      beforeEach(() => {
        resourcePrototype = Resource.prototype;
        err = new Error();
      });

      test('err.extensions.response.status is 404', async () => {
        err.extensions = {
          response: {
            status: '404'
          }
        }
        resourcePrototype.get = jest.fn().mockRejectedValue(err);

        expect(await resourcePrototype.getAllResources()).toEqual([]);
      });
      test('err.extensions.response.status is not 404', async () => {
        resourcePrototype.get = jest.fn().mockRejectedValue(err);
        expect(await resourcePrototype.getAllResources()).toEqual(err);
      });
    });
  });

  describe('getResourceById', () => {
    let resourcePrototype;
    beforeEach(() => {
      resourcePrototype = Resource.prototype;
      resourcePrototype.get = jest.fn();
    });

    describe('try', () => {
      describe('id truthy', () => {
        test('get function should be called with id value as param', () => {
          resourcePrototype.getResourceById('1');
          expect(resourcePrototype.get.mock.calls).toEqual([['1']]);
        });
        test('return value', async () => {
          resourcePrototype.get.mockReturnValue('resource');
          expect(await resourcePrototype.getResourceById('1')).toEqual('resource');
        })
      });
      describe('id falsy', () => {
        test('return value', async() => {
          resourcePrototype.getResourceById();
          expect(await resourcePrototype.getResourceById()).toEqual(null);
        });
      });
    });

    describe('catch', () => {
      let resourcePrototype,
          err;
      beforeEach(() => {
        resourcePrototype = Resource.prototype;
        err = new Error();
      });

      test('err.extensions.response.status is 404', async () => {
        err.extensions = {
          response: {
            status: '404'
          }
        }
        resourcePrototype.get = jest.fn().mockRejectedValue(err);

        expect(await resourcePrototype.getResourceById('1')).toEqual(null);
      });
      test('err.extensions.response.status is not 404', async () => {
        resourcePrototype.get = jest.fn().mockRejectedValue(err);
        expect(await resourcePrototype.getResourceById('1')).toEqual(err);
      });
    });
  });

  describe('getResourceByField', () => {
    let resourceURLS,
        resourcePrototype,
        result;

    beforeEach(() => {
      resourcePrototype = Resource.prototype;
      resourcePrototype.getResourceId = jest.fn().mockReturnValue('resourceID');
      resourcePrototype.getResourceById = jest.fn().mockReturnValue('resource');
      resourceURLS = ['resource1_URL', 'resource2_URL', 'resource3_URL'];
      result = resourcePrototype.getResourceByField(resourceURLS);
    });

    test('getResourceId should be called the same number of times than elements in resourceURLS', () => {
      expect(resourcePrototype.getResourceId.mock.calls).toEqual([['resource1_URL'], ['resource2_URL'], ['resource3_URL']]);
    });
    test('getResourceById should be called the same number of times than elements in resourceURLS', () => {
      expect(resourcePrototype.getResourceById.mock.calls).toEqual([['resourceID'], ['resourceID'], ['resourceID']]);
    });
    test('getResourceById should be called the same number of times than elements in resourceURLS', () => {
      expect(resourcePrototype.getResourceById.mock.calls).toEqual([['resourceID'], ['resourceID'], ['resourceID']]);
    });
    test('result value', () => {
      expect(result).toEqual(['resource', 'resource', 'resource']);
    });
  });

  describe('getResourceId', () => {
    test('should return the ID of a given resource', () => {
      expect(Resource.prototype.getResourceId('https://swapi.dev/api/people/5/')).toEqual('5');
    });
  });
});
