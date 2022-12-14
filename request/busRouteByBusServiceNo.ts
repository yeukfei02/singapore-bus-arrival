import _ from 'lodash';

import { getAllBusRoute } from '../request/allBusRoute';
import { getBusStopByBusStopCode } from './busStopByBusStopCode';

export const getBusRouteByBusServiceNo = async (busServiceNo: string): Promise<any> => {
  const busRouteResults: any[] = [];

  const busRoutes = await getAllBusRoute(busServiceNo);
  if (!_.isEmpty(busRoutes)) {
    for (let index = 0; index < busRoutes.length; index++) {
      const item = busRoutes[index];

      let busStopCodeList = [];
      if (item.busStopCode) {
        busStopCodeList = await getBusStopByBusStopCode(item.busStopCode);
      }

      let busStop = {};
      if (!_.isEmpty(busStopCodeList)) {
        busStop = busStopCodeList[0];
      }

      const obj = {
        serviceNo: item.serviceNo,
        operator: item.operator,
        direction: item.direction,
        stopSequence: item.stopSequence,
        busStopCode: item.busStopCode,
        busStop: busStop,
        distance: item.distance,
        wdFirstBus: item.wdFirstBus,
        wdLastBus: item.wdLastBus,
        satFirstBus: item.satFirstBus,
        satLastBus: item.satLastBus,
        sunFirstBus: item.sunFirstBus,
        sunLastBus: item.sunLastBus,
      };
      busRouteResults.push(obj);
    }
  }

  return busRouteResults;
};
