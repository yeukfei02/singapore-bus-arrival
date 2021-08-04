import { getBusArrival } from '../request/busArrival';
import { getBusStopByLatLong } from '../request/busStopByLatLong';
import { getBusStopByRoadName } from '../request/busStopByRoadName';
import { getBusStopByDescription } from '../request/busStopByDescription';
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
          _.inRange(latitude, item.latitude - 0.005, item.latitude + 0.005) &&
          _.inRange(longitude, item.longitude - 0.005, item.longitude + 0.005)
        ) {
          return item;
        }
      }
    });

    console.log('resultList.length = ', resultList.length);

    if (_.isEmpty(resultList)) {
      resultList = busStopCodeList;
    }

    if (!_.isEmpty(resultList)) {
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
