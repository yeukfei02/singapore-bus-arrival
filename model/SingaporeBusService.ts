import dynamoose from 'dynamoose';
dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY ? process.env.MY_AWS_ACCESS_KEY : '',
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY ? process.env.MY_AWS_SECRET_ACCESS_KEY : '',
  region: 'ap-southeast-1',
});

const singaporeBusServiceSchema = new dynamoose.Schema(
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
    category: String,
    originCode: String,
    destinationCode: String,
    amPeakFreq: String,
    amOffpeakFreq: String,
    pmPeakFreq: String,
    pmOffpeakFreq: String,
    loopDesc: String,
  },
  {
    saveUnknown: true,
    timestamps: true,
  },
);

const singaporeBusServiceModel = dynamoose.model('SingaporeBusService', singaporeBusServiceSchema);

export default singaporeBusServiceModel;
