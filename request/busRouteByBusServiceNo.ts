// import env from 'dotenv';
// env.config();

import _ from 'lodash';

import { getAllBusRoute } from '../request/allBusRoute';
import { getBusStopByBusStopCode } from './busStopByBusStopCode';

export const getBusRouteByBusServiceNo = async (busServiceNo: string): Promise<any> => {
  const busRouteList: any[] = [];

  const allBusRouteList = await getAllBusRoute();
  if (!_.isEmpty(allBusRouteList)) {
    const busRouteList = allBusRouteList.filter((item: any, i: number) => {
      if (item.serviceNo === busServiceNo) {
        return item;
      }
    });
    console.log('busRouteList = ', busRouteList);

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
          serviceNo: item.ServiceNo,
          operator: item.Operator,
          direction: item.Direction,
          stopSequence: item.StopSequence,
          busStopCode: item.BusStopCode,
          busStop: busStop,
          distance: item.Distance,
          wdFirstBus: item.WD_FirstBus,
          wdLastBus: item.WD_LastBus,
          satFirstBus: item.SAT_FirstBus,
          satLastBus: item.SAT_LastBus,
          sunFirstBus: item.SUN_FirstBus,
          sunLastBus: item.SUN_LastBus,
        };
        busRouteList.push(obj);
      }
    }
  }

  return busRouteList;
};
