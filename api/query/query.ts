import { queryField, nonNull, list, stringArg, floatArg, intArg } from 'nexus';
import { BusArrival } from '../types/busArrival';
import { BusStopCode } from '../types/busStopCode';
import { AllBusService } from '../types/allBusService';
import { AllBusRoute } from '../types/allBusRoute';
import { BusService } from '../types/busService';
import { BusRoute } from '../types/busRoute';
import { Favourites } from '../types/favourites';

import {
  busArrivalControllerFunc,
  busStopByLatLongControllerFunc,
  busStopByRoadNameControllerFunc,
  busStopByDescriptionControllerFunc,
  busStopByBusStopCodeControllerFunc,
  allBusServiceControllerFunc,
  allBusRouteControllerFunc,
  busServiceByBusServiceNoControllerFunc,
  busRouteByBusServiceNoControllerFunc,
} from '../../controller/bus';
import { getFavouritesByInstallationIdControllerFunc } from '../../controller/favourites';

export const busArrival = queryField('busArrival', {
  type: nonNull(BusArrival),
  args: {
    busStopCode: nonNull(stringArg()),
  },
  resolve: busArrivalControllerFunc as any,
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

export const busStopByBusStopCode = queryField('busStopByBusStopCode', {
  type: nonNull(list(nonNull(BusStopCode))),
  args: {
    busStopCode: nonNull(stringArg()),
  },
  resolve: busStopByBusStopCodeControllerFunc,
});

export const allBusService = queryField('allBusService', {
  type: nonNull(list(nonNull(AllBusService))),
  args: {},
  resolve: allBusServiceControllerFunc,
});

export const allBusRoute = queryField('allBusRoute', {
  type: nonNull(list(nonNull(AllBusRoute))),
  args: {},
  resolve: allBusRouteControllerFunc,
});

export const busServiceByBusServiceNo = queryField('busServiceByBusServiceNo', {
  type: nonNull(BusService),
  args: {
    busServiceNo: nonNull(stringArg()),
  },
  resolve: busServiceByBusServiceNoControllerFunc,
});

export const busRouteByBusServiceNo = queryField('busRouteByBusServiceNo', {
  type: nonNull(list(nonNull(BusRoute))),
  args: {
    busServiceNo: nonNull(stringArg()),
  },
  resolve: busRouteByBusServiceNoControllerFunc,
});

export const getFavouritesByInstallationId = queryField('getFavouritesByInstallationId', {
  type: nonNull(list(nonNull(Favourites))),
  args: {
    installationId: nonNull(stringArg()),
  },
  resolve: getFavouritesByInstallationIdControllerFunc,
});
