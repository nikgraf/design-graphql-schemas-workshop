const { ApolloServer } = require("apollo-server");

// const lesson = require("./lesson1/before");
// const lesson = require("./lesson1/after");
// const lesson = require("./lesson02/before");
// const lesson = require("./lesson02/after");
// const lesson = require("./lesson03/before");
// const lesson = require("./lesson03/after");
// const lesson = require("./lesson04/before");
// const lesson = require("./lesson04/after");
// const lesson = require("./lesson05/before");
// const lesson = require("./lesson05/step1");
const lesson = require("./lesson05/after");

const server = new ApolloServer(lesson);

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
