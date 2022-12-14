import { getBusArrival } from '../request/busArrival';
import { getBusStopByLatLong } from '../request/busStopByLatLong';
import { getBusStopByRoadName } from '../request/busStopByRoadName';
import { getBusStopByDescription } from '../request/busStopByDescription';
import { getBusStopByBusStopCode } from '../request/busStopByBusStopCode';
import { getAllBusService } from '../request/allBusService';
import { getAllBusRoute } from '../request/allBusRoute';
import { getAllBusStop } from '../request/allBusStop';
import { getBusServiceByBusServiceNo } from '../request/busServiceByBusServiceNo';
import { getBusRouteByBusServiceNo } from '../request/busRouteByBusServiceNo';
import _ from 'lodash';

export const busArrivalControllerFunc = async (parent: any, args: any, context: any, info: any): Promise<any[]> => {
  console.log('### busArrival ###');
  console.log('args = ', args);

  const busStopCode = args.busStopCode;
  const busArrival = await getBusArrival(busStopCode);

  console.log('busArrival = ', busArrival);

  return busArrival;
};

export const busStopByLatLongControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  console.log('### busStopByLatLong ###');
  console.log('args = ', args);

  let busStopByLatLongs: any[] = [];

  const latitude = args.latitude;
  const longitude = args.longitude;
  const pageNumber = args.pageNumber || 1;

  let limit = 10;
  if (pageNumber > 1) {
    limit = pageNumber * 10;
  }

  const busStopCodes = await getBusStopByLatLong(latitude, longitude, limit);
  console.log('busStopCodes.length = ', busStopCodes.length);

  if (busStopCodes) {
    busStopByLatLongs = busStopCodes;
  }

  busStopByLatLongs = _.orderBy(busStopByLatLongs, ['description', 'roadName'], ['desc', 'desc']);

  console.log('busStopByLatLongs = ', busStopByLatLongs);

  return busStopByLatLongs;
};

export const busStopByRoadNameControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  console.log('### busStopByRoadName ###');
  console.log('args = ', args);

  const roadName = args.roadName;

  let busStopCodes = [];

  if (roadName) {
    busStopCodes = await getBusStopByRoadName(roadName);
  }

  busStopCodes = _.orderBy(busStopCodes, ['description', 'roadName'], ['desc', 'desc']);

  console.log('busStopCodes = ', busStopCodes);

  return busStopCodes;
};

export const busStopByDescriptionControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  console.log('### busStopByDescription ###');
  console.log('args = ', args);

  const description = args.description;

  let busStopCodes = [];

  if (description) {
    busStopCodes = await getBusStopByDescription(description);
  }

  busStopCodes = _.orderBy(busStopCodes, ['description', 'roadName'], ['desc', 'desc']);

  console.log('busStopCodes = ', busStopCodes);

  return busStopCodes;
};

export const busStopByBusStopCodeControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  console.log('### busStopByBusStopCode ###');
  console.log('args = ', args);

  const busStopCode = args.busStopCode;

  let busStopCodes = [];

  if (busStopCode) {
    busStopCodes = await getBusStopByBusStopCode(busStopCode);
  }

  console.log('busStopCodes = ', busStopCodes);

  return busStopCodes;
};

export const allBusServiceControllerFunc = async (parent: any, args: any, context: any, info: any): Promise<any> => {
  console.log('### allBusService ###');
  console.log('args = ', args);

  const busServiceNo = args.busServiceNo;

  let allBusServices = await getAllBusService(busServiceNo);

  allBusServices = _.orderBy(allBusServices, ['serviceNo'], ['asc']);

  console.log('allBusServices = ', allBusServices);

  return allBusServices;
};

export const allBusRouteControllerFunc = async (): Promise<any> => {
  console.log('### allBusRoute ###');

  let allBusRoutes = await getAllBusRoute();

  allBusRoutes = _.orderBy(allBusRoutes, ['serviceNo'], ['asc']);

  console.log('allBusRoutes = ', allBusRoutes);

  return allBusRoutes;
};

export const allBusStopControllerFunc = async (): Promise<any> => {
  console.log('### allBusStop ###');

  let allBusStops = await getAllBusStop();

  allBusStops = _.orderBy(allBusStops, ['busStopCode'], ['asc']);

  console.log('allBusStops = ', allBusStops);

  return allBusStops;
};

export const busServiceByBusServiceNoControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any> => {
  console.log('### busServiceByBusServiceNo ###');
  console.log('args = ', args);

  const busServiceNo = args.busServiceNo;

  let busService = {};

  if (busServiceNo) {
    busService = await getBusServiceByBusServiceNo(busServiceNo);
  }

  console.log('busService = ', busService);

  return busService;
};

export const busRouteByBusServiceNoControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  console.log('### busRouteByBusServiceNo ###');
  console.log('args = ', args);

  const busServiceNo = args.busServiceNo;

  let busRoutes = [];

  if (busServiceNo) {
    busRoutes = await getBusRouteByBusServiceNo(busServiceNo);

    busRoutes = _.orderBy(busRoutes, ['direction', 'stopSequence'], ['asc', 'asc']);
  }

  console.log('busRoutes = ', busRoutes);

  return busRoutes;
};
