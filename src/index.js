const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

main();

async function main() {
  const server = new ApolloServer({
    typeDefs: [
      //DateTimeTypeDefinition, // object
      //'scalar IMEI',
      typeDefs, // string
    ],
    resolvers,
  });
  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}
