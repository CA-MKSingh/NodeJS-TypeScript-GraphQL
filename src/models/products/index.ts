import { graphqlHTTP } from 'express-graphql';
import schema from '@schemas/products/index';
import resolvers from '@resolvers/products/index';

const root = resolvers;
const graphQLDemo = graphqlHTTP({ schema, rootValue: root, graphiql: true });

export { graphQLDemo };
