const {RESTDataSource} = require('apollo-datasource-rest');

module.exports = class Resource extends RESTDataSource {
  constructor(baseURL) {
    super();
    this.baseURL = baseURL;
  }

  async getAllResources(pageNumber) {
    try {
      const {results} = await this.get(`${this.baseURL}?page=${pageNumber || '1'}`);
      return results;
    } catch (err) {
      if (err.extensions && err.extensions.response && err.extensions.response.status === '404') {
        return [];
      }
      return err;
    }
  }

  async getResourceById(id) {
    try {
      if (id) {
        const resource = await this.get(id);
        return resource;
      }
      return null;
    } catch (err) {
      if (err.extensions && err.extensions.response && err.extensions.response.status === '404') {
        return null;
      }
      return err;
    }
  }

  getResourceByField(resourceURLS) {
    const results = [];

    resourceURLS.forEach(resourceURL => {
      const resourceId = this.getResourceId(resourceURL),
            result =  this.getResourceById(resourceId);
      
      results.push(result);
    });

    return results;
  }

  getResourceId(resourceURL) {
    const trailingSlash = resourceURL.lastIndexOf('/'),
          idSlash = resourceURL.substring(0, trailingSlash).lastIndexOf('/'),
          resourceId = resourceURL.substring(idSlash + 1, trailingSlash);

    return resourceId;
  }
};