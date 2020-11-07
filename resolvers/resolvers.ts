import { getBusArrival } from '../api/busArrival';
import { getBusStopCode } from '../api/busStopCode';

const resolvers = {
  Query: {
    busArrival: async (root: any, args: any, context: any, info: any): Promise<any[]> => {
      const busStopCode = args.busStopCode;
      const busArrivalList = await getBusArrival(busStopCode);

      return busArrivalList;
    },

    busStopCode: async (root: any, args: any, context: any, info: any): Promise<any[]> => {
      const latitude = args.latitude;
      const longitude = args.longitude;
      const busStopCodeList = await getBusStopCode(latitude, longitude);

      return busStopCodeList;
    },
  },
};

export default resolvers;
