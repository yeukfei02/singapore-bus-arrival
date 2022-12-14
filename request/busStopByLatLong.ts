import { getAllBusStop } from './allBusStop';

export const getBusStopByLatLong = async (latitude: number, longitude: number, limit: number): Promise<any> => {
  const busStopCodes = await getAllBusStop('', latitude, longitude, limit);
  return busStopCodes;
};
