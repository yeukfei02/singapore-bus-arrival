import { getAllBusStop } from './allBusStop';

export const getBusStopByLatLong = async (): Promise<any> => {
  const busStopCodeList = await getAllBusStop();
  return busStopCodeList;
};
