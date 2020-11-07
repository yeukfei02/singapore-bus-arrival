import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from '../schema/typeDefs';
import resolvers from '../resolvers/resolvers';

import awsXRay from 'aws-xray-sdk';
import awsSdk from 'aws-sdk';
awsXRay.captureAWS(awsSdk);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/v1',
  },
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});
