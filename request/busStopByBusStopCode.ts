import { getAllBusStop } from './allBusStop';

export const getBusStopByBusStopCode = async (busStopCode: string): Promise<any> => {
  const busStopCodes = await getAllBusStop(busStopCode);
  return busStopCodes;
};
