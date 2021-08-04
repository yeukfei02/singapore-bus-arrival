import { queryField, nonNull, list, stringArg, floatArg, intArg } from 'nexus';
import { BusArrival } from '../types/busArrival';
import { BusStopCode } from '../types/busStopCode';
import { Favourites } from '../types/favourites';

import {
  busArrivalControllerFunc,
  busStopByLatLongControllerFunc,
  busStopByRoadNameControllerFunc,
  busStopByDescriptionControllerFunc,
} from '../../controller/bus';
import { getFavouritesByInstallationIdControllerFunc } from '../../controller/favourites';

export const busArrival = queryField('busArrival', {
  type: nonNull(BusArrival),
  args: {
    busStopCode: nonNull(stringArg()),
  },
  resolve: busArrivalControllerFunc,
});

export const busStopByLatLong = queryField('busStopByLatLong', {
  type: nonNull(list(nonNull(BusStopCode))),
  args: {
    latitude: nonNull(floatArg()),
    longitude: nonNull(floatArg()),
    pageNumber: nonNull(intArg()),
  },
  resolve: busStopByLatLongControllerFunc,
});

export const busStopByRoadName = queryField('busStopByRoadName', {
  type: nonNull(list(nonNull(BusStopCode))),
  args: {
    roadName: nonNull(stringArg()),
  },
  resolve: busStopByRoadNameControllerFunc,
});

export const busStopByDescription = queryField('busStopByDescription', {
  type: nonNull(list(nonNull(BusStopCode))),
  args: {
    description: nonNull(stringArg()),
  },
  resolve: busStopByDescriptionControllerFunc,
});

export const getFavouritesByInstallationId = queryField('getFavouritesByInstallationId', {
  type: nonNull(list(nonNull(Favourites))),
  args: {
    installationId: nonNull(stringArg()),
  },
  resolve: getFavouritesByInstallationIdControllerFunc,
});
