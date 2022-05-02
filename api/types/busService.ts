import { objectType } from 'nexus';
import { BusStopCode } from './busStopCode';

export const BusService = objectType({
  name: 'BusService',
  definition(t) {
    t.nonNull.field('originBusStop', { type: BusStopCode });
    t.nonNull.field('destinationBusStop', { type: BusStopCode });
  },
});
