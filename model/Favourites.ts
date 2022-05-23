import dynamoose from 'dynamoose';
dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-1',
});

const favouritesSchema = new dynamoose.Schema(
  {
    id: String,
    installation_id: {
      type: String,
      rangeKey: true,
    },
    item: {
      type: Object,
      schema: {
        bus_stop_code: String,
        description: String,
        latitude: Number,
        longitude: Number,
        road_name: String,
      },
    },
  },
  {
    saveUnknown: true,
    timestamps: true,
  },
);

const favouritesModel = dynamoose.model('Favourites', favouritesSchema);

export default favouritesModel;
