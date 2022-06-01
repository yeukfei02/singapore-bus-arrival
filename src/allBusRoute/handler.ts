import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import axios from 'axios';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import SingaporeBusRoute from '../../model/SingaporeBusRoute';
import { BusRoute, Value } from '../../interface/BusRoute';

export const allBusRoute: Handler = async (event: APIGatewayEvent, context: Context) => {
  await deleteAllBusRoute();

  let skipNum = 0;
  let loopStatus = true;
  while (loopStatus) {
    const responseDataValue = await fetchBusRoute(skipNum);
    console.log('responseDataValue.length = ', responseDataValue.length);

    if (!_.isEmpty(responseDataValue)) {
      for (let index = 0; index < responseDataValue.length; index++) {
        const item = responseDataValue[index];

        const singaporeBusRoute = new SingaporeBusRoute({
          id: uuidv4(),
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
        });
        await singaporeBusRoute.save();
      }

      skipNum += 500;
    } else {
      loopStatus = false;
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'allBusRoute',
    }),
  };
  return response;
};

async function deleteAllBusRoute() {
  const singaporeBusRoute = await SingaporeBusRoute.scan().all().exec();
  const singaporeBusRouteList = singaporeBusRoute.toJSON();
  for (let index = 0; index < singaporeBusRouteList.length; index++) {
    const singaporeBusRoute = singaporeBusRouteList[index];
    await SingaporeBusRoute.delete({ id: singaporeBusRoute.id });
  }
}

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
