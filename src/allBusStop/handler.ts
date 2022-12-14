import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import axios from 'axios';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import SingaporeBusStop from '../../model/SingaporeBusStop';
import { BusStopCode, Value } from '../../interface/BusStopCode';

export const allBusStop: Handler = async (event: APIGatewayEvent, context: Context) => {
  await deleteAllBusStop();

  let skipNum = 0;
  let loopStatus = true;
  while (loopStatus) {
    const responseDataValue = await fetchBusStop(skipNum);
    console.log('responseDataValue.length = ', responseDataValue.length);

    if (!_.isEmpty(responseDataValue)) {
      for (let index = 0; index < responseDataValue.length; index++) {
        const item = responseDataValue[index];

        const singaporeBusStop = new SingaporeBusStop({
          id: uuidv4(),
          busStopCode: item.BusStopCode,
          roadName: item.RoadName,
          description: item.Description,
          latitude: item.Latitude,
          longitude: item.Longitude,
        });
        await singaporeBusStop.save();
      }

      skipNum += 500;
    } else {
      loopStatus = false;
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'allBusStop',
    }),
  };
  return response;
};

async function deleteAllBusStop() {
  const singaporeBusStop = await SingaporeBusStop.scan().all().exec();
  const singaporeBusStopList = singaporeBusStop.toJSON();
  for (let index = 0; index < singaporeBusStopList.length; index++) {
    const singaporeBusStop = singaporeBusStopList[index];
    await SingaporeBusStop.delete({ id: singaporeBusStop.id });
  }
}

async function fetchBusStop(skipNum?: number) {
  let valueList: Value[] = [];

  let response: any = null;
  if (skipNum === 0) {
    response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusStops`, {
      headers: {
        AccountKey: process.env.ACCOUNT_KEY ? process.env.ACCOUNT_KEY : '',
        Accept: 'application/json',
      },
    });
  } else {
    response = await axios.get(`http://datamall2.mytransport.sg/ltaodataservice/BusStops`, {
      params: {
        $skip: skipNum,
      },
      headers: {
        AccountKey: process.env.ACCOUNT_KEY ? process.env.ACCOUNT_KEY : '',
        Accept: 'application/json',
      },
    });
  }

  if (response) {
    const responseData: BusStopCode = response.data;
    if (responseData && responseData.value) {
      valueList = responseData.value;
    }
  }

  return valueList;
}
