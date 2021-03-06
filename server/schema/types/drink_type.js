const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql

const DrinkType = new GraphQLObjectType({
  name: 'DrinkType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    available_sizes: { type: new GraphQLList(GraphQLString) },
    image_url: {type: GraphQLString}
  }
})

module.exports = DrinkType
