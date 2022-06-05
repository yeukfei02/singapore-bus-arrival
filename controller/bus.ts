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
  const busStopCode = args.busStopCode;
  const busArrivalList = await getBusArrival(busStopCode);

  return busArrivalList;
};

export const busStopByLatLongControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  let resultList: any[] = [];

  const latitude = args.latitude;
  const longitude = args.longitude;
  const pageNumber = args.pageNumber || 1;

  let limit = 10;

  const busStopCodeList = await getBusStopByLatLong();
  console.log('busStopCodeList.length = ', busStopCodeList.length);

  if (busStopCodeList) {
    resultList = busStopCodeList.filter((item: any, i: number) => {
      if (latitude > 0 && longitude > 0) {
        if (
          _.inRange(latitude, item.latitude - 0.0015, item.latitude + 0.0015) &&
          _.inRange(longitude, item.longitude - 0.0015, item.longitude + 0.0015)
        ) {
          return item;
        }
      }
    });
  }

  console.log('### before pagination resultList.length = ', resultList.length);

  if (pageNumber === 1) {
    resultList = resultList.filter((item: any, i: number) => {
      return i < limit;
    });
  } else {
    limit = pageNumber * 10;
    resultList = resultList.filter((item: any, i: number) => {
      return i < limit;
    });
  }

  console.log('### after pagination resultList.length = ', resultList.length);

  resultList = _.orderBy(resultList, ['description', 'roadName'], ['desc', 'desc']);

  return resultList;
};

export const busStopByRoadNameControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  const roadName = args.roadName;

  let busStopCodeList = [];
  if (roadName) {
    busStopCodeList = await getBusStopByRoadName(roadName);
  }

  busStopCodeList = _.orderBy(busStopCodeList, ['description', 'roadName'], ['desc', 'desc']);

  return busStopCodeList;
};

export const busStopByDescriptionControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  const description = args.description;

  let busStopCodeList = [];
  if (description) {
    busStopCodeList = await getBusStopByDescription(description);
  }

  busStopCodeList = _.orderBy(busStopCodeList, ['description', 'roadName'], ['desc', 'desc']);

  return busStopCodeList;
};

export const busStopByBusStopCodeControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  const busStopCode = args.busStopCode;

  let busStopCodeList = [];
  if (busStopCode) {
    busStopCodeList = await getBusStopByBusStopCode(busStopCode);
  }

  return busStopCodeList;
};

export const allBusServiceControllerFunc = async (parent: any, args: any, context: any, info: any): Promise<any> => {
  const busServiceNo = args.busServiceNo;

  let allBusServiceList = await getAllBusService(busServiceNo);

  allBusServiceList = _.orderBy(allBusServiceList, ['serviceNo'], ['asc']);

  return allBusServiceList;
};

export const allBusRouteControllerFunc = async (): Promise<any> => {
  let allBusRouteList = await getAllBusRoute();

  allBusRouteList = _.orderBy(allBusRouteList, ['serviceNo'], ['asc']);

  return allBusRouteList;
};

export const allBusStopControllerFunc = async (): Promise<any> => {
  let allBusStopList = await getAllBusStop();

  allBusStopList = _.orderBy(allBusStopList, ['busStopCode'], ['asc']);

  return allBusStopList;
};

export const busServiceByBusServiceNoControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any> => {
  const busServiceNo = args.busServiceNo;

  let busService = {};
  if (busServiceNo) {
    busService = await getBusServiceByBusServiceNo(busServiceNo);
  }

  return busService;
};

export const busRouteByBusServiceNoControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  const busServiceNo = args.busServiceNo;

  let busRouteList = [];
  if (busServiceNo) {
    busRouteList = await getBusRouteByBusServiceNo(busServiceNo);

    busRouteList = _.orderBy(busRouteList, ['direction', 'stopSequence'], ['asc', 'asc']);
  }

  return busRouteList;
};
