import _ from 'lodash';

import { getAllBusStop } from './allBusStop';

export const getBusStopByBusStopCode = async (busStopCode: string): Promise<any> => {
  let busStopCodeList = await getAllBusStop(busStopCode);

  busStopCodeList = _.orderBy(busStopCodeList, ['busStopCode'], ['asc']);

  return busStopCodeList;
};
