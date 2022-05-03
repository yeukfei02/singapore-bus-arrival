import _ from 'lodash';

import { getAllBusStop } from './allBusStop';

export const getBusStopByLatLong = async (): Promise<any> => {
  let busStopCodeList = await getAllBusStop();

  busStopCodeList = _.orderBy(busStopCodeList, ['busStopCode'], ['asc']);

  return busStopCodeList;
};
