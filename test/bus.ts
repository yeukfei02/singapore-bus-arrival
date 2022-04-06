import { GraphQLClient, gql } from 'graphql-request';

const rootUrl = 'https://73ddoqlmy0.execute-api.ap-southeast-1.amazonaws.com/prod';
const graphQLClient = new GraphQLClient(rootUrl);

export const busTest = (): void => {
  describe('bus test', () => {
    test('bus arrival', async () => {
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
      const variables = { busStopCode: '07211' };
      const response = await graphQLClient.request(BUS_ARRIVAL, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.busArrival).toBeDefined();
      expect(response.busArrival.busStopCode).toBeDefined();
      expect(response.busArrival.services).toBeDefined();
    });

    test('bus stop by lat long', async () => {
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
      const response = await graphQLClient.request(BUS_STOP_BY_LAT_LONG, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.busStopByLatLong).toBeDefined();
    });

    test('bus stop by road name', async () => {
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
      const response = await graphQLClient.request(BUS_STOP_BY_ROAD_NAME, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.busStopByRoadName).toBeDefined();
    });

    test('bus stop by description', async () => {
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
      const response = await graphQLClient.request(BUS_STOP_BY_DESCRIPTION, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.busStopByDescription).toBeDefined();
    });

    test('bus stop by bus stop code', async () => {
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
      const response = await graphQLClient.request(BUS_STOP_BY_BUS_STOP_CODE, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.busStopByBusStopCode).toBeDefined();
    });

    // test('bus stop by bus service no', async () => {
    //   const BUS_STOP_BY_BUS_SERVICE_NO = gql`
    //     query busServiceByBusServiceNo($busServiceNo: String!) {
    //       busServiceByBusServiceNo(busServiceNo: $busServiceNo) {
    //         serviceNo
    //         operator
    //         direction
    //         category
    //         originCode
    //         originBusStop {
    //           busStopCode
    //           roadName
    //           description
    //           latitude
    //           longitude
    //         }
    //         destinationCode
    //         destinationBusStop {
    //           busStopCode
    //           roadName
    //           description
    //           latitude
    //           longitude
    //         }
    //         amPeakFreq
    //         amOffpeakFreq
    //         pmPeakFreq
    //         pmOffpeakFreq
    //         loopDesc
    //       }
    //     }
    //   `;
    //   const variables = {
    //     busServiceNo: '131',
    //   };
    //   const response = await graphQLClient.request(BUS_STOP_BY_BUS_SERVICE_NO, variables);
    //   console.log('response = ', response);

    //   expect(response).toBeDefined();
    //   expect(response.busServiceByBusServiceNo).toBeDefined();
    // });

    // test('bus route by bus service no', async () => {
    //   const BUS_RUOTE_BY_BUS_SERVICE_NO = gql`
    //     query busRouteByBusServiceNo($busServiceNo: String!) {
    //       busRouteByBusServiceNo(busServiceNo: $busServiceNo) {
    //         serviceNo
    //         operator
    //         direction
    //         stopSequence
    //         busStopCode
    //         busStop {
    //           busStopCode
    //           roadName
    //           description
    //           latitude
    //           longitude
    //         }
    //         distance
    //         wdFirstBus
    //         wdLastBus
    //         satFirstBus
    //         satLastBus
    //         sunFirstBus
    //         sunLastBus
    //       }
    //     }
    //   `;
    //   const variables = {
    //     busServiceNo: '131',
    //   };
    //   const response = await graphQLClient.request(BUS_RUOTE_BY_BUS_SERVICE_NO, variables);
    //   console.log('response = ', response);

    //   expect(response).toBeDefined();
    //   expect(response.busRouteByBusServiceNo).toBeDefined();
    // });
  });
};
