import { objectType } from 'nexus';

export const AllBusRoute = objectType({
  name: 'AllBusRoute',
  definition(t) {
    t.nonNull.string('serviceNo');
    t.nonNull.string('operator');
    t.nonNull.int('direction');
    t.nonNull.int('stopSequence');
    t.nonNull.string('busStopCode');
    t.nonNull.float('distance');
    t.nonNull.string('wdFirstBus');
    t.nonNull.string('wdLastBus');
    t.nonNull.string('satFirstBus');
    t.nonNull.string('satLastBus');
    t.nonNull.string('sunFirstBus');
    t.nonNull.string('sunLastBus');
  },
});
