const { ApolloServer } = require("apollo-server");

const lesson = require("./lesson1");

const server = new ApolloServer(lesson);

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
