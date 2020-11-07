import axios from 'axios';

import env from 'dotenv';
env.config();

import { BusArrival, Service } from '../interface/BusArrival';

export const getBusArrival = async (busStopCode: string): Promise<any> => {
  const busArrival = {};

  if (busStopCode) {
    const response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2`, {
      params: {
        BusStopCode: busStopCode,
      },
      headers: {
        AccountKey: process.env.ACCOUNT_KEY,
        Accept: 'application/json',
      },
    });
    if (response) {
      const responseData: BusArrival = response.data;
      console.log('responseData = ', responseData);

      if (responseData) {
        busArrival['busStopCode'] = responseData.BusStopCode;

        if (responseData.Services) {
          const servicesList = responseData.Services.map((item: Service, i: number) => {
            const nextBusOne = item.NextBus;
            const nextBusTwo = item.NextBus2;
            const nextBusThree = item.NextBus3;

            const nextBusOneObj = {
              estimatedArrival: nextBusOne.EstimatedArrival,
              latitude: nextBusOne.Latitude,
              longitude: nextBusOne.Longitude,
              load: getLoadStr(nextBusOne.Load),
              feature: getFeatureStr(nextBusOne.Feature),
              type: getTypeStr(nextBusOne.Type),
            };
            const nextBusTwoObj = {
              estimatedArrival: nextBusTwo.EstimatedArrival,
              latitude: nextBusTwo.Latitude,
              longitude: nextBusTwo.Longitude,
              load: getLoadStr(nextBusTwo.Load),
              feature: getFeatureStr(nextBusTwo.Feature),
              type: getTypeStr(nextBusTwo.Type),
            };
            const nextBusThreeObj = {
              estimatedArrival: nextBusThree.EstimatedArrival,
              latitude: nextBusThree.Latitude,
              longitude: nextBusThree.Longitude,
              load: getLoadStr(nextBusThree.Load),
              feature: getFeatureStr(nextBusThree.Feature),
              type: getTypeStr(nextBusThree.Type),
            };

            const nextBusList: any[] = [];
            nextBusList.push(nextBusOneObj);
            nextBusList.push(nextBusTwoObj);
            nextBusList.push(nextBusThreeObj);

            const obj = {
              busNumber: item.ServiceNo,
              operator: getOperatorStr(item.Operator),
              nextBus: nextBusList,
            };
            return obj;
          });

          if (servicesList) {
            busArrival['services'] = servicesList;
          }
        }
      }
    }

    return busArrival;
  }
};

function getOperatorStr(operator: string) {
  let operatorStr = '';

  switch (operator) {
    case 'SBST':
      operatorStr = `SBST (SBS Transit)`;
      break;
    case 'SMRT':
      operatorStr = `SMRT (SMRT Corporation)`;
      break;
    case 'TTS':
      operatorStr = `TTS (Tower Transit Singapore)`;
      break;
    case 'GAS':
      operatorStr = `GAS (Go Ahead Singapore)`;
      break;
    default:
      break;
  }

  return operatorStr;
}

function getLoadStr(load: string) {
  let loadStr = '';

  switch (load) {
    case 'SEA':
      loadStr = `SEA (Seats Available)`;
      break;
    case 'SDA':
      loadStr = `SDA (Standing Available)`;
      break;
    case 'LSD':
      loadStr = `LSD (Limited Standing)`;
      break;
    default:
      break;
  }

  return loadStr;
}

function getFeatureStr(feature: string) {
  let featureStr = '';

  switch (feature) {
    case 'WAB':
      featureStr = `WAB (Wheel-Chair Accessible)`;
      break;
    default:
      break;
  }

  return featureStr;
}

function getTypeStr(type: string) {
  let typeStr = '';

  switch (type) {
    case 'SD':
      typeStr = `SD (Single Deck)`;
      break;
    case 'DD':
      typeStr = `SD (Double Deck)`;
      break;
    case 'BD':
      typeStr = `SD (Bendy)`;
      break;
    default:
      break;
  }

  return typeStr;
}