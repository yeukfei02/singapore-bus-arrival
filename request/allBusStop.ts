import SingaporeBusStop from '../model/SingaporeBusStop';

export const getAllBusStop = async (busStopCode?: string): Promise<any> => {
  let singaporeBusStop: any = null;

  if (!busStopCode) {
    singaporeBusStop = await SingaporeBusStop.scan().all().exec();
  } else {
    singaporeBusStop = await SingaporeBusStop.query({ busStopCode: { eq: busStopCode } })
      .using('busStopCodeIndex')
      .all()
      .exec();
  }

  let singaporeBusStopList = [];
  if (singaporeBusStop) {
    singaporeBusStopList = singaporeBusStop.toJSON();
  }

  return singaporeBusStopList;
};
