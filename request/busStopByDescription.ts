import _ from 'lodash';

import { getAllBusStop } from './allBusStop';

export const getBusStopByDescription = async (description: string): Promise<any> => {
  const busStopCodeResults: any[] = [];

  const busStopCodes = await getAllBusStop();
  if (!_.isEmpty(busStopCodes)) {
    for (let index = 0; index < busStopCodes.length; index++) {
      const item = busStopCodes[index];

      if (item.description.toLowerCase().includes(description.toLowerCase())) {
        const obj = {
          busStopCode: item.busStopCode,
          roadName: item.roadName,
          description: item.description,
          latitude: item.latitude,
          longitude: item.longitude,
        };
        busStopCodeResults.push(obj);
      }
    }
  }

  return busStopCodeResults;
};
