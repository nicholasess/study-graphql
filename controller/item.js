const graphql = require("graphql");
const Model = require("../model/item");
const GraphModel = require("../graphql/item");

module.exports = {
  item: {
    type: GraphModel,
    // `args` describes the arguments that the `user` query accepts
    args: {
      title: { type: graphql.GraphQLString }
    },
    resolve: function(_, { title }) {
      return Model.findOne({ title: title }).exec();
    }
  },
  items: {
    type: GraphModel,
    resolve: function(_) {
      //return Model.find().exec();
      return [{ title: "1", id: "123" }];
    }
  }
};
