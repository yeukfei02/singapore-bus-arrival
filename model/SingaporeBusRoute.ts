import dynamoose from 'dynamoose';
dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-1',
});

const singaporeBusRouteSchema = new dynamoose.Schema(
  {
    id: String,
    serviceNo: {
      type: String,
      index: {
        name: 'serviceNoIndex',
        global: true,
      },
    },
    operator: String,
    direction: Number,
    stopSequence: Number,
    busStopCode: String,
    distance: Number,
    wdFirstBus: String,
    wdLastBus: String,
    satFirstBus: String,
    satLastBus: String,
    sunFirstBus: String,
    sunLastBus: String,
  },
  {
    saveUnknown: true,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

const singaporeBusRouteModel = dynamoose.model('SingaporeBusRoute', singaporeBusRouteSchema);

export default singaporeBusRouteModel;
