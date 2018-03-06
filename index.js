var express = require("express");
var graphqlHTTP = require("express-graphql");
var graphql = require("graphql");
const mongoose = require("mongoose");
const userCtrl = require("./controller/item");
// Define the Query type
var queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    ...userCtrl
  }
});

var schema = new graphql.GraphQLSchema({ query: queryType });

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(4000, () => {
  console.log("Running a GraphQL API server at localhost:4000/graphql");
});

mongoose.connect("mongodb://user:1234@ds063406.mlab.com:63406/jobentria");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Running MongoDB");
});
