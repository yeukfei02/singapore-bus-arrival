import { ApolloServer } from 'apollo-server';
import typeDefs from '../schema/typeDefs';
import resolvers from '../resolvers/resolvers';

import { createTestClient } from 'apollo-server-testing';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { query } = createTestClient(server);

export const busTest = (): void => {
  describe('bus test', () => {
    test('bus arrival test', async () => {
      const BUS_ARRIVAL = `
        query busArrival ($busStopCode: String!) {
            busArrival (busStopCode: $busStopCode) {
                busStopCode
                services {
                    busNumber
                    operator
                    nextBus {
                        estimatedArrival
                        latitude
                        longitude
                        load
                        feature
                        type
                    }
                }
            }
        }
      `;
      const response = await query({ query: BUS_ARRIVAL, variables: { busStopCode: '07211' } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.busArrival).toBeDefined();
      expect(response.data.busArrival.busStopCode).toBeDefined();
      expect(response.data.busArrival.services).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('bus stop by lat long test', async () => {
      const BUS_STOP_BY_LAT_LONG = `
        query busStopByLatLong ($latitude: Float!, $longitude: Float!, $pageNumber: Int!) {
            busStopByLatLong (latitude: $latitude, longitude: $longitude, pageNumber: $pageNumber) {
                busStopCode
                roadName
                description
                latitude
                longitude
            }
        }
      `;
      const response = await query({
        query: BUS_STOP_BY_LAT_LONG,
        variables: { latitude: 1.31313747728456, longitude: 103.8563561439714, pageNumber: 1 },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.busStopByLatLong).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('bus stop by road name test', async () => {
      const BUS_STOP_BY_ROAD_NAME = `
        query busStopByRoadName ($roadName: String!) {
            busStopByRoadName (roadName: $roadName) {
                busStopCode
                roadName
                description
                latitude
                longitude
            }
        }
      `;
      const response = await query({
        query: BUS_STOP_BY_ROAD_NAME,
        variables: { roadName: 'Rangoon' },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.busStopByRoadName).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('bus stop by description test', async () => {
      const BUS_STOP_BY_DESCRIPTION = `
        query busStopByDescription ($description: String!) {
            busStopByDescription (description: $description) {
                busStopCode
                roadName
                description
                latitude
                longitude
            }
        }
      `;
      const response = await query({
        query: BUS_STOP_BY_DESCRIPTION,
        variables: { description: 'farrer' },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.busStopByDescription).toBeDefined();
      expect(response.errors).toBeUndefined();
    });
  });
};
