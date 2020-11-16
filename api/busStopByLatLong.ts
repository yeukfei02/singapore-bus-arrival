import env from 'dotenv';
env.config();

import axios from 'axios';
import _ from 'lodash';

import { BusStopCode, Value } from '../interface/BusStopCode';

export const getBusStopByLatLong = async (latitude: number, longitude: number): Promise<any> => {
  const busStopCodeList: any[] = [];

  let skipNum = 0;
  let loopStatus = true;
  while (loopStatus) {
    const responseDataValue = await fetchBusStop(skipNum);
    if (!_.isEmpty(responseDataValue)) {
      responseDataValue.forEach((item: Value, i: number) => {
        if (
          _.inRange(latitude, item.Latitude - 0.5, item.Latitude + 0.5) &&
          _.inRange(longitude, item.Longitude - 0.5, item.Longitude + 0.5)
        ) {
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
