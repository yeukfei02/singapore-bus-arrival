import SingaporeBusService from '../model/SingaporeBusService';

export const getAllBusService = async (busServiceNo?: string): Promise<any> => {
  let singaporeBusService: any = null;

  if (!busServiceNo) {
    singaporeBusService = await SingaporeBusService.scan().all().exec();
  } else {
    singaporeBusService = await SingaporeBusService.query({ serviceNo: { eq: busServiceNo } })
      .using('serviceNoIndex')
      .all()
      .exec();
  }

  let singaporeBusServices = [];

  if (singaporeBusService) {
    singaporeBusServices = singaporeBusService.toJSON();

    singaporeBusServices = singaporeBusServices.filter((item: any, i: number) => {
      return item.direction === 1;
    });
  }

  return singaporeBusServices;
};
