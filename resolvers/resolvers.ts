import { getBusArrival } from '../api/busArrival';
import { getBusStopByLatLong } from '../api/busStopByLatLong';
import { getBusStopByRoadName } from '../api/busStopByRoadName';
import { getBusStopByDescription } from '../api/busStopByDescription';

import { v4 as uuidv4 } from 'uuid';
import Favourites from '../model/Favourites';

const resolvers = {
  Query: {
    busArrival: async (parent: any, args: any, context: any, info: any): Promise<any[]> => {
      const busStopCode = args.busStopCode;
      const busArrivalList = await getBusArrival(busStopCode);

      return busArrivalList;
    },

    busStopByLatLong: async (parent: any, args: any, context: any, info: any): Promise<any[]> => {
      let resultList = [];

      const latitude = args.latitude;
      const longitude = args.longitude;
      const pageNumber = args.pageNumber || 1;

      let limit = 10;

      if (latitude > 0 && longitude > 0) {
        const busStopCodeList = await getBusStopByLatLong(latitude, longitude);
        if (busStopCodeList) {
          if (pageNumber === 1) {
            resultList = busStopCodeList.filter((item: any, i: number) => {
              return i < limit;
            });
          } else {
            limit = pageNumber * 10;
            resultList = busStopCodeList.filter((item: any, i: number) => {
              return i < limit;
            });
          }
        }
      }

      return resultList;
    },

    busStopByRoadName: async (parent: any, args: any, context: any, info: any): Promise<any[]> => {
      const roadName = args.roadName;

      let busStopCodeList = [];
      if (roadName) {
        busStopCodeList = await getBusStopByRoadName(roadName);
      }

      return busStopCodeList;
    },

    busStopByDescription: async (parent: any, args: any, context: any, info: any): Promise<any[]> => {
      const description = args.description;

      let busStopCodeList = [];
      if (description) {
        busStopCodeList = await getBusStopByDescription(description);
      }

      return busStopCodeList;
    },

    getFavouritesByInstallationId: async (parent: any, args: any, context: any, info: any): Promise<any[]> => {
      const resultList: any[] = [];

      const installationId = args.installationId;
      if (installationId) {
        const favourites = await Favourites.scan({ installation_id: { eq: installationId } }).exec();
        const favouritesList = favourites.toJSON();
        favouritesList.forEach((item: any, i: number) => {
          resultList.push(item);
        });
      }

      return resultList;
    },
  },

  Mutation: {
    addFavourites: async (parent: any, args: any, context: any, info: any): Promise<any> => {
      const result = {
        status: false,
      };

      const installationId = args.data.installationId;
      const item = args.data.item;
      if (installationId && item) {
        const favourites = new Favourites({
          id: uuidv4(),
          installation_id: installationId,
          item: {
            bus_stop_code: item.busStopCode,
            description: item.description,
            latitude: item.latitude,
            longitude: item.longitude,
            road_name: item.roadName,
          },
        });
        await favourites.save();

        result.status = true;
      }

      return result;
    },

    deleteFavouritesById: async (parent: any, args: any, context: any, info: any): Promise<any> => {
      const result = {
        status: false,
      };

      const id = args.data.id;
      const installationId = args.data.installationId;
      if (id && installationId) {
        await Favourites.delete({ id: id, installation_id: installationId });

        result.status = true;
      }

      return result;
    },
  },
};

export default resolvers;
