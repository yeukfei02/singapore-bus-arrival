// import env from 'dotenv';
// env.config();

import { ApolloServer } from 'apollo-server-lambda';
import { schema } from '../../api/schema';

import awsXRay from 'aws-xray-sdk';
import awsSdk from 'aws-sdk';
if (process.env._X_AMZN_TRACE_ID) {
  awsXRay.captureAWS(awsSdk);
}

const server = new ApolloServer({
  schema,
  tracing: true,
  introspection: true,
  playground: {
    endpoint: '/prod',
  },
  context: ({ event, context }) => {
    const data = {
      event: event,
      context: context,
    };
    return data;
  },
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});
