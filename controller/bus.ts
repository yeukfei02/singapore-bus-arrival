import { getBusArrival } from '../request/busArrival';
import { getBusStopByLatLong } from '../request/busStopByLatLong';
import { getBusStopByRoadName } from '../request/busStopByRoadName';
import { getBusStopByDescription } from '../request/busStopByDescription';
import { getBusStopByBusStopCode } from '../request/busStopByBusStopCode';
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
          _.inRange(latitude, item.latitude - 0.05, item.latitude + 0.05) &&
          _.inRange(longitude, item.longitude - 0.05, item.longitude + 0.05)
        ) {
          return item;
        }
      }
    });

    console.log('resultList.length = ', resultList.length);

    if (_.isEmpty(resultList)) {
      resultList = busStopCodeList;
    } else {
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
    }
  }
  console.log('resultList.length = ', resultList.length);

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

export const busServiceByBusServiceNoControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  const busServiceNo = args.busServiceNo;

  let busServiceList = [];
  if (busServiceNo) {
    busServiceList = await getBusServiceByBusServiceNo(busServiceNo);
  }

  return busServiceList;
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
  }

  return busRouteList;
};
