import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import Favourites from '../model/Favourites';

export const getFavouritesByInstallationIdControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any[]> => {
  const resultList: any[] = [];

  const installationId = args.installationId;
  if (installationId) {
    const favourites = await Favourites.scan({ installation_id: { eq: installationId } })
      .all()
      .exec();
    const favouritesList = favourites.toJSON();

    for (let index = 0; index < favouritesList.length; index++) {
      const item = favouritesList[index];
      resultList.push(item);
    }
  }

  const formattedResultList = _.orderBy(resultList, ['createdAt'], ['desc']);

  return formattedResultList;
};

export const addFavouritesControllerFunc = async (parent: any, args: any, context: any, info: any): Promise<any> => {
  const result = {
    status: false,
  };

  const installationId = args.data.installationId;
  const item = args.data.item;
  if (installationId && item) {
    const favourites = new Favourites({
      id: uuidv4(),
      installation_id: installationId,
      item: {
        bus_stop_code: item.busStopCode,
        description: item.description,
        latitude: item.latitude,
        longitude: item.longitude,
        road_name: item.roadName,
      },
    });
    await favourites.save();

    result.status = true;
  }

  return result;
};

export const deleteFavouritesByIdControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any,
): Promise<any> => {
  const result = {
    status: false,
  };

  const id = args.data.id;
  const installationId = args.data.installationId;
  if (id && installationId) {
    await Favourites.delete({ id: id, installation_id: installationId });

    result.status = true;
  }

  return result;
};
