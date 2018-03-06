var graphql = require("graphql");

module.exports = new graphql.GraphQLObjectType({
  name: "Item",
  fields: {
    id: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString }
  }
});
