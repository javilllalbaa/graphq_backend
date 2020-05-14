import express from 'express'
import bodyParser from 'body-parser'
import { makeExecutableSchema } from 'graphql-tools'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import typeDefs from './schemas'
import resolvers from './resolvers'
import { connect } from "./service/database"
 
const PORT = 3001
const endPoint = '/info'

let server = express()
connect()

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

server.use(endPoint, bodyParser.json(), graphqlExpress({
    schema
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: endPoint,
}));

server.listen(PORT, () => {
    console.log('GraphQL API listen in http://localhost:' + PORT + endPoint);
    console.log('GraphiQL listen in http://localhost:' + PORT + '/graphiql');
});
