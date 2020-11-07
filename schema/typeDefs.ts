// import { importSchema } from 'graphql-import';

// const typeDefs = importSchema('schema/schema.graphql');

import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    busArrival(busStopCode: String!): BusArrival!
    busStopByLatLong(latitude: Float!, longitude: Float!): [BusStopCode!]!
    busStopByRoadName(roadName: String!): [BusStopCode!]!
    busStopByDescription(description: String!): [BusStopCode!]!
  }

  type BusArrival {
    busStopCode: String!
    services: [Services!]!
  }

  type Services {
    busNumber: String!
    operator: String!
    nextBus: [NestBus!]!
  }

  type NestBus {
    estimatedArrival: String!
    latitude: String!
    longitude: String!
    load: String!
    feature: String!
    type: String!
  }

  type BusStopCode {
    busStopCode: String!
    roadName: String!
    description: String!
    latitude: Float!
    longitude: Float!
  }
`;

export default typeDefs;
