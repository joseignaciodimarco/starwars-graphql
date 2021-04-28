const {ApolloServer} = require('apollo-server'),
      typeDefs = require('./graphql/schemas'),
      resolvers = require('./graphql/resolvers'),
      dataSources = require('./data-sources'),
      server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources
      });

server.listen().then(() => {
  console.log('Server Listening on PORT 4000');
});