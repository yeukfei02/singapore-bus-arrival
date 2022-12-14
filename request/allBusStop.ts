import dynamoose from 'dynamoose';
dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY ? process.env.MY_AWS_ACCESS_KEY : '',
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY ? process.env.MY_AWS_SECRET_ACCESS_KEY : '',
  region: 'ap-southeast-1',
});

import SingaporeBusStop from '../model/SingaporeBusStop';

export const getAllBusStop = async (
  busStopCode?: string,
  latitude?: number,
  longitude?: number,
  limit?: number,
): Promise<any> => {
  let singaporeBusStop: any = null;

  console.log('busStopCode = ', busStopCode);
  console.log('latitude = ', latitude);
  console.log('longitude = ', longitude);
  console.log('limit = ', limit);

  if (!busStopCode) {
    if (latitude && longitude && latitude != 0 && longitude != 0) {
      const condition = new dynamoose.Condition()
        .where('latitude')
        .between(latitude - 0.0015, latitude + 0.0015)
        .and()
        .where('longitude')
        .between(longitude - 0.0015, longitude + 0.0015);
      singaporeBusStop = await SingaporeBusStop.scan(condition).all(0, limit).exec();
    } else {
      singaporeBusStop = await SingaporeBusStop.scan().all(0, limit).exec();
    }
  } else {
    singaporeBusStop = await SingaporeBusStop.query({ busStopCode: { eq: busStopCode } })
      .using('busStopCodeIndex')
      .all()
      .exec();
  }

  let singaporeBusStops = [];

  if (singaporeBusStop) {
    singaporeBusStops = singaporeBusStop.toJSON();
  }

  return singaporeBusStops;
};
