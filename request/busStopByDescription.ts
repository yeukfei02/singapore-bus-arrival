import _ from 'lodash';

import { getAllBusStop } from './allBusStop';

export const getBusStopByDescription = async (description: string): Promise<any> => {
  const busStopCodeResultList: any[] = [];

  const busStopCodeList = await getAllBusStop();
  if (!_.isEmpty(busStopCodeList)) {
    for (let index = 0; index < busStopCodeList.length; index++) {
      const item = busStopCodeList[index];

      if (item.description.toLowerCase().includes(description.toLowerCase())) {
        const obj = {
          busStopCode: item.busStopCode,
          roadName: item.roadName,
          description: item.description,
          latitude: item.latitude,
          longitude: item.longitude,
        };
        busStopCodeResultList.push(obj);
      }
    }
  }

  return busStopCodeResultList;
};
