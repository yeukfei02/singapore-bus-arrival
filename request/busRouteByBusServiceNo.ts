import _ from 'lodash';

import { getAllBusRoute } from '../request/allBusRoute';
import { getBusStopByBusStopCode } from './busStopByBusStopCode';

export const getBusRouteByBusServiceNo = async (busServiceNo: string): Promise<any> => {
  const busRouteResultList: any[] = [];

  const busRouteList = await getAllBusRoute(busServiceNo);
  if (!_.isEmpty(busRouteList)) {
    for (let index = 0; index < busRouteList.length; index++) {
      const item = busRouteList[index];

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
      busRouteResultList.push(obj);
    }
  }

  return busRouteResultList;
};
