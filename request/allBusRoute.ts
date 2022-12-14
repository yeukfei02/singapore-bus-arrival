import SingaporeBusRoute from '../model/SingaporeBusRoute';

export const getAllBusRoute = async (busServiceNo?: string): Promise<any> => {
  let singaporeBusRoute: any = null;

  if (!busServiceNo) {
    singaporeBusRoute = await SingaporeBusRoute.scan().all().exec();
  } else {
    singaporeBusRoute = await SingaporeBusRoute.query({ serviceNo: { eq: busServiceNo } })
      .using('serviceNoIndex')
      .all()
      .exec();
  }

  let singaporeBusRoutes = [];

  if (singaporeBusRoute) {
    singaporeBusRoutes = singaporeBusRoute.toJSON();
  }

  return singaporeBusRoutes;
};
