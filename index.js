const { ApolloServer } = require("apollo-server");

// const lesson = require("./lesson01/before");
// const lesson = require("./lesson01/after");
// const lesson = require("./lesson02/before");
// const lesson = require("./lesson02/after");
// const lesson = require("./lesson03/before");
// const lesson = require("./lesson03/after");
// const lesson = require("./lesson04/before");
// const lesson = require("./lesson04/after");
// const lesson = require("./lesson05/before");
// const lesson = require("./lesson05/after");
// const lesson = require("./lesson06/before");
// const lesson = require("./lesson06/step1");
// const lesson = require("./lesson06/after");
// const lesson = require("./lesson07/before");
// const lesson = require("./lesson07/after");
// const lesson = require("./lesson08/before");
// const lesson = require("./lesson08/after");
// const lesson = require("./lesson09/before");
// const lesson = require("./lesson09/after");
// const lesson = require("./lesson10/before");
// const lesson = require("./lesson10/after");
// const lesson = require("./lesson11/before");
// const lesson = require("./lesson11/after");
// const lesson = require("./lesson12/before");
const lesson = require("./lesson12/after");

const server = new ApolloServer(lesson);

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
