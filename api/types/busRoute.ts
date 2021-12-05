import { objectType } from 'nexus';
import { BusStopCode } from './busStopCode';

export const BusRoute = objectType({
  name: 'BusRoute',
  definition(t) {
    t.nonNull.string('serviceNo');
    t.nonNull.string('operator');
    t.nonNull.int('direction');
    t.nonNull.int('stopSequence');
    t.nonNull.string('busStopCode');
    t.nonNull.field('busStop', { type: BusStopCode });
    t.nonNull.float('distance');
    t.nonNull.string('wdFirstBus');
    t.nonNull.string('wdLastBus');
    t.nonNull.string('satFirstBus');
    t.nonNull.string('satLastBus');
    t.nonNull.string('sunFirstBus');
    t.nonNull.string('sunLastBus');
  },
});
