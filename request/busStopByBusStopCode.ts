import { getAllBusStop } from './allBusStop';

export const getBusStopByBusStopCode = async (busStopCode: string): Promise<any> => {
  const busStopCodeList = await getAllBusStop(busStopCode);
  return busStopCodeList;
};
