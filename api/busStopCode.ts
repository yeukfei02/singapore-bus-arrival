import axios from 'axios';
import _ from 'lodash';

import env from 'dotenv';
env.config();

import { BusStopCode, Value } from '../interface/BusStopCode';

export const getBusStopCode = async (latitude: number, longitude: number): Promise<any> => {
  const busStopCodeList: any[] = [];

  const response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusStops`, {
    headers: {
      AccountKey: process.env.ACCOUNT_KEY,
      Accept: 'application/json',
    },
  });
  if (response) {
    const responseData: BusStopCode = response.data;
    console.log('responseData = ', responseData);

    if (responseData) {
      if (responseData.value) {
        responseData.value.forEach((item: Value, i: number) => {
          if (
            _.inRange(latitude, item.Latitude - 5, item.Latitude + 5) &&
            _.inRange(longitude, item.Longitude - 5, item.Longitude + 5)
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
      }
    }
  }

  return busStopCodeList;
};
