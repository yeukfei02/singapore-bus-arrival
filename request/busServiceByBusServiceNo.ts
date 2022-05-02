// import env from 'dotenv';
// env.config();

import _ from 'lodash';

import { getAllBusService } from '../request/allBusService';
import { getBusStopByBusStopCode } from './busStopByBusStopCode';

export const getBusServiceByBusServiceNo = async (busServiceNo: string): Promise<any> => {
  let busService = {};

  const allBusServiceList = await getAllBusService();
  if (!_.isEmpty(allBusServiceList)) {
    const busList = allBusServiceList.filter((item: any, i: number) => {
      if (item.serviceNo === busServiceNo) {
        return item;
      }
    });
    console.log('busList = ', busList);

    const bus = busList[0];
    if (!_.isEmpty(bus)) {
      let originCodeBusStopCodeList = [];
      if (bus.originCode) {
        originCodeBusStopCodeList = await getBusStopByBusStopCode(bus.originCode);
      }
      let destinationCodeBusStopCodeList = [];
      if (bus.destinationCode) {
        destinationCodeBusStopCodeList = await getBusStopByBusStopCode(bus.destinationCode);
      }

      let originBusStop = {};
      if (!_.isEmpty(originCodeBusStopCodeList)) {
        originBusStop = originCodeBusStopCodeList[0];
      }

      let destinationBusStop = {};
      if (!_.isEmpty(destinationCodeBusStopCodeList)) {
        destinationBusStop = destinationCodeBusStopCodeList[0];
      }

      const obj = {
        originBusStop: originBusStop,
        destinationBusStop: destinationBusStop,
      };
      busService = obj;
    }
  }

  return busService;
};
