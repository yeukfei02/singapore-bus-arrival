import dynamoose from 'dynamoose';
dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-1',
});

const singaporeBusStopSchema = new dynamoose.Schema(
  {
    id: String,
    busStopCode: {
      type: String,
      index: {
        name: 'busStopCodeIndex',
        global: true,
      },
    },
    roadName: String,
    description: String,
    latitude: Number,
    longitude: Number,
  },
  {
    saveUnknown: true,
    timestamps: true,
  },
);

const singaporeBusStopModel = dynamoose.model('SingaporeBusStop', singaporeBusStopSchema);

export default singaporeBusStopModel;
