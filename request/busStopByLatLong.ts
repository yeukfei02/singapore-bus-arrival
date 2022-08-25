import { getAllBusStop } from './allBusStop';

export const getBusStopByLatLong = async (latitude: number, longitude: number, limit: number): Promise<any> => {
  const busStopCodeList = await getAllBusStop('', latitude, longitude, limit);
  return busStopCodeList;
};
