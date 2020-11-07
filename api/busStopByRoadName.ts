import axios from 'axios';
import _ from 'lodash';

import env from 'dotenv';
env.config();

import { BusStopCode, Value } from '../interface/BusStopCode';

export const getBusStopByRoadName = async (roadName: string): Promise<any> => {
  const busStopCodeList: any[] = [];

  let skipNum = 0;
  let loopStatus = true;
  while (loopStatus) {
    const responseDataValue = await fetchBusStop(skipNum);
    if (!_.isEmpty(responseDataValue)) {
      responseDataValue.forEach((item: Value, i: number) => {
        if (item.RoadName.toLowerCase().includes(roadName.toLowerCase())) {
          const obj = {
            busStopCode: item.BusStopCode,
            roadName: item.RoadName,
            description: item.Description,
            latitude: item.Latitude,
            longitude: item.Longitude,
          };
          busStopCodeList.push(obj);
        }
      });

      skipNum += 500;
    } else {
      loopStatus = false;
    }
  }

  return busStopCodeList;
};

async function fetchBusStop(skipNum?: number) {
  let valueList: Value[] = [];

  let response: any = null;
  if (skipNum === 0) {
    response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusStops`, {
      headers: {
        AccountKey: process.env.ACCOUNT_KEY,
        Accept: 'application/json',
      },
    });
  } else {
    response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusStops`, {
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
    const responseData: BusStopCode = response.data;
    console.log('responseData = ', responseData);

    if (responseData) {
      if (responseData.value) {
        valueList = responseData.value;
      }
    }
  }

  return valueList;
}
