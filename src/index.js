import resolvers from './resolvers' 
import { GraphQLServer } from "graphql-yoga"
import path from "path";
import "./service/database"

// console.log(path.join(__dirname, "graphql/./schemas/schema_.graphql"))

export const server = new GraphQLServer({
    typeDefs: path.join(__dirname, "./schemas/schema.graphql"),
    resolvers
  });

server.start({port: 3200}, ({port}) => {
console.log('Server on port', port);
});


