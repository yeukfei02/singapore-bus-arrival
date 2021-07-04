import {
  busArrivalControllerFunc,
  busStopByLatLongControllerFunc,
  busStopByRoadNameControllerFunc,
  busStopByDescriptionControllerFunc,
} from '../controller/bus';
import {
  getFavouritesByInstallationIdControllerFunc,
  addFavouritesControllerFunc,
  deleteFavouritesByIdControllerFunc,
} from '../controller/favourites';

const resolvers = {
  Query: {
    busArrival: busArrivalControllerFunc,
    busStopByLatLong: busStopByLatLongControllerFunc,
    busStopByRoadName: busStopByRoadNameControllerFunc,
    busStopByDescription: busStopByDescriptionControllerFunc,

    getFavouritesByInstallationId: getFavouritesByInstallationIdControllerFunc,
  },

  Mutation: {
    addFavourites: addFavouritesControllerFunc,
    deleteFavouritesById: deleteFavouritesByIdControllerFunc,
  },
};

export default resolvers;
