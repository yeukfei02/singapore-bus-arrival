import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import axios from 'axios';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import SingaporeBusService from '../../model/SingaporeBusService';
import { BusService, Value } from '../../interface/BusService';

export const allBusService: Handler = async (event: APIGatewayEvent, context: Context) => {
  await deleteAllBusService();

  let skipNum = 0;
  let loopStatus = true;
  while (loopStatus) {
    const responseDataValue = await fetchBusService(skipNum);
    if (!_.isEmpty(responseDataValue)) {
      for (let index = 0; index < responseDataValue.length; index++) {
        const item = responseDataValue[index];

        const singaporeBusService = new SingaporeBusService({
          id: uuidv4(),
          serviceNo: item.ServiceNo,
          operator: item.Operator,
          direction: item.Direction,
          category: item.Category,
          originCode: item.OriginCode,
          destinationCode: item.DestinationCode,
          amPeakFreq: item.AM_Peak_Freq,
          amOffpeakFreq: item.AM_Offpeak_Freq,
          pmPeakFreq: item.PM_Peak_Freq,
          pmOffpeakFreq: item.PM_Offpeak_Freq,
          loopDesc: item.LoopDesc,
        });
        await singaporeBusService.save();
      }

      skipNum += 500;
    } else {
      loopStatus = false;
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'allBusService',
    }),
  };
  return response;
};

async function deleteAllBusService() {
  const singaporeBusService = await SingaporeBusService.scan().all().exec();
  const singaporeBusServiceList = singaporeBusService.toJSON();
  for (let index = 0; index < singaporeBusServiceList.length; index++) {
    const singaporeBusService = singaporeBusServiceList[index];
    await singaporeBusService.delete();
  }
}

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

    if (responseData && responseData.value) {
      valueList = responseData.value;
    }
  }

  return valueList;
}
