// import env from 'dotenv';
// env.config();

import axios from 'axios';
import _ from 'lodash';

import { BusService, Value } from '../interface/BusService';
import { getBusStopByBusStopCode } from './busStopByBusStopCode';

export const getBusServiceByBusServiceNo = async (busServiceNo: string): Promise<any> => {
  const busServiceList: any[] = [];

  let skipNum = 0;
  let loopStatus = true;
  while (loopStatus) {
    const responseDataValue = await fetchBusService(skipNum);
    if (!_.isEmpty(responseDataValue)) {
      for (let index = 0; index < responseDataValue.length; index++) {
        const item = responseDataValue[index];

        if (item.ServiceNo === busServiceNo) {
          let originCodeBusStopCodeList = [];
          if (item.OriginCode) {
            originCodeBusStopCodeList = await getBusStopByBusStopCode(item.OriginCode);
          }
          let destinationCodeBusStopCodeList = [];
          if (item.DestinationCode) {
            destinationCodeBusStopCodeList = await getBusStopByBusStopCode(item.DestinationCode);
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
            serviceNo: item.ServiceNo,
            operator: item.Operator,
            direction: item.Direction,
            category: item.Category,
            originCode: item.OriginCode,
            originBusStop: originBusStop,
            destinationCode: item.DestinationCode,
            destinationBusStop: destinationBusStop,
            amPeakFreq: item.AM_Peak_Freq,
            amOffpeakFreq: item.AM_Offpeak_Freq,
            pmPeakFreq: item.PM_Peak_Freq,
            pmOffpeakFreq: item.PM_Offpeak_Freq,
            loopDesc: item.LoopDesc,
          };
          busServiceList.push(obj);
        }
      }

      skipNum += 500;
    } else {
      loopStatus = false;
    }
  }

  return busServiceList;
};

async function fetchBusService(skipNum?: number) {
  let valueList: Value[] = [];

  let response: any = null;
  if (skipNum === 0) {
    response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusServices`, {
      headers: {
        AccountKey: process.env.ACCOUNT_KEY,
        Accept: 'application/json',
      },
    });
  } else {
    response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusServices`, {
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
    const responseData: BusService = response.data;
    console.log('responseData = ', responseData);

    if (responseData) {
      if (responseData.value) {
        valueList = responseData.value;
      }
    }
  }

  return valueList;
}
