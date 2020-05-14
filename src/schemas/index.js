import schema from './Schema.graphql'
import Query from './Query.graphql'
import Mutation from './Mutation.graphql'
import User from './Users.graphql'
import products from './Products.graphql'

const typeDefs = [
    schema,
    Mutation,
    Query,
    User,
    products
]

export default typeDefs;