import { GraphQLClient, gql } from 'graphql-request';

const rootUrl = 'https://73ddoqlmy0.execute-api.ap-southeast-1.amazonaws.com/prod';
const graphQLClient = new GraphQLClient(rootUrl);

export const busTest = (): void => {
  describe('bus test', () => {
    describe('bus arrival', () => {
      let response: any;

      beforeEach(async () => {
        const BUS_ARRIVAL = gql`
          query busArrival($busStopCode: String!) {
            busArrival(busStopCode: $busStopCode) {
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
        const variables = { busStopCode: '60261' };
        response = await graphQLClient.request(BUS_ARRIVAL, variables);
      });

      it('return success', () => {
        console.log('response = ', response);

        expect(response).toBeDefined();
        expect(response.busArrival).toBeDefined();
        expect(response.busArrival.busStopCode).toBeDefined();
        expect(response.busArrival.services).toBeDefined();
      });
    });

    describe('bus stop by lat long', () => {
      let response: any;

      beforeEach(async () => {
        const BUS_STOP_BY_LAT_LONG = gql`
          query busStopByLatLong($latitude: Float!, $longitude: Float!, $pageNumber: Int!) {
            busStopByLatLong(latitude: $latitude, longitude: $longitude, pageNumber: $pageNumber) {
              busStopCode
              roadName
              description
              latitude
              longitude
            }
          }
        `;
        const variables = { latitude: 1.31313747728456, longitude: 103.8563561439714, pageNumber: 1 };
        response = await graphQLClient.request(BUS_STOP_BY_LAT_LONG, variables);
      });

      it('return success', () => {
        console.log('response = ', response);

        expect(response).toBeDefined();
        expect(response.busStopByLatLong).toBeDefined();
      });
    });

    describe('bus stop by road name', () => {
      let response: any;

      beforeEach(async () => {
        const BUS_STOP_BY_ROAD_NAME = gql`
          query busStopByRoadName($roadName: String!) {
            busStopByRoadName(roadName: $roadName) {
              busStopCode
              roadName
              description
              latitude
              longitude
            }
          }
        `;
        const variables = { roadName: 'Rangoon' };
        response = await graphQLClient.request(BUS_STOP_BY_ROAD_NAME, variables);
      });

      it('return success', () => {
        console.log('response = ', response);

        expect(response).toBeDefined();
        expect(response.busStopByRoadName).toBeDefined();
      });
    });

    describe('bus stop by description', () => {
      let response: any;

      beforeEach(async () => {
        const BUS_STOP_BY_DESCRIPTION = gql`
          query busStopByDescription($description: String!) {
            busStopByDescription(description: $description) {
              busStopCode
              roadName
              description
              latitude
              longitude
            }
          }
        `;
        const variables = { description: 'farrer' };
        response = await graphQLClient.request(BUS_STOP_BY_DESCRIPTION, variables);
      });

      it('return success', () => {
        console.log('response = ', response);

        expect(response).toBeDefined();
        expect(response.busStopByDescription).toBeDefined();
      });
    });

    describe('bus stop by bus stop code', () => {
      let response: any;

      beforeEach(async () => {
        const BUS_STOP_BY_BUS_STOP_CODE = gql`
          query busStopByBusStopCode($busStopCode: String!) {
            busStopByBusStopCode(busStopCode: $busStopCode) {
              busStopCode
              roadName
              description
              latitude
              longitude
            }
          }
        `;
        const variables = {
          busStopCode: '60261',
        };
        response = await graphQLClient.request(BUS_STOP_BY_BUS_STOP_CODE, variables);
      });

      it('return success', () => {
        console.log('response = ', response);

        expect(response).toBeDefined();
        expect(response.busStopByBusStopCode).toBeDefined();
      });
    });
  });
};
