// import env from 'dotenv';
// env.config();

import axios from 'axios';
import _ from 'lodash';

import { BusRoute, Value } from '../interface/BusRoute';

export const getAllBusRoute = async (): Promise<any> => {
  const busRouteList: any[] = [];

  let skipNum = 0;
  let loopStatus = true;
  while (loopStatus) {
    const responseDataValue = await fetchBusRoute(skipNum);
    if (!_.isEmpty(responseDataValue)) {
      for (let index = 0; index < responseDataValue.length; index++) {
        const item = responseDataValue[index];

        const obj = {
          serviceNo: item.ServiceNo,
          operator: item.Operator,
          direction: item.Direction,
          stopSequence: item.StopSequence,
          busStopCode: item.BusStopCode,
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

      skipNum += 500;
    } else {
      loopStatus = false;
    }
  }

  return busRouteList;
};

async function fetchBusRoute(skipNum?: number) {
  let valueList: Value[] = [];

  let response: any = null;
  if (skipNum === 0) {
    response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusRoutes`, {
      headers: {
        AccountKey: process.env.ACCOUNT_KEY,
        Accept: 'application/json',
      },
    });
  } else {
    response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusRoutes`, {
      params: {
        $skip: skipNum,
      },
      headers: {
        AccountKey: process.env.ACCOUNT_KEY,
        Accept: 'application/json',
      },
    });
  }

  if (response) {
    const responseData: BusRoute = response.data;
    console.log('responseData = ', responseData);

    if (responseData && responseData.value) {
      valueList = responseData.value;
    }
  }

  return valueList;
}
