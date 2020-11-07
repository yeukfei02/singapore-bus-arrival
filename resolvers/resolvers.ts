import { getBusArrival } from '../api/busArrival';
import { getBusStopByLatLong } from '../api/busStopByLatLong';
import { getBusStopByRoadName } from '../api/busStopByRoadName';
import { getBusStopByDescription } from '../api/busStopByDescription';

const resolvers = {
  Query: {
    busArrival: async (root: any, args: any, context: any, info: any): Promise<any[]> => {
      const busStopCode = args.busStopCode;
      const busArrivalList = await getBusArrival(busStopCode);

      return busArrivalList;
    },

    busStopByLatLong: async (root: any, args: any, context: any, info: any): Promise<any[]> => {
      const latitude = args.latitude;
      const longitude = args.longitude;

      let busStopCodeList = [];
      if (latitude > 0 && longitude > 0) {
        busStopCodeList = await getBusStopByLatLong(latitude, longitude);
      }

      return busStopCodeList;
    },

    busStopByRoadName: async (root: any, args: any, context: any, info: any): Promise<any[]> => {
      const roadName = args.roadName;

      let busStopCodeList = [];
      if (roadName) {
        busStopCodeList = await getBusStopByRoadName(roadName);
      }

      return busStopCodeList;
    },

    busStopByDescription: async (root: any, args: any, context: any, info: any): Promise<any[]> => {
      const description = args.description;

      let busStopCodeList = [];
      if (description) {
        busStopCodeList = await getBusStopByDescription(description);
      }

      return busStopCodeList;
    },
  },
};

export default resolvers;
