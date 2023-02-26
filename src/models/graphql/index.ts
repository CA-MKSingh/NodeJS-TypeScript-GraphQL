import { graphqlHTTP } from 'express-graphql';
import schema from '@schemas/graphql';
import resolvers from '@resolvers/graphql/index';

const root = resolvers;
const graphQLDemo = graphqlHTTP({ schema, rootValue: root, graphiql: true });

export { graphQLDemo };
