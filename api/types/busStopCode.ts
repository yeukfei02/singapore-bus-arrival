import { objectType } from 'nexus';

export const BusStopCode = objectType({
  name: 'BusStopCode',
  definition(t) {
    t.nonNull.string('busStopCode');
    t.nonNull.string('roadName');
    t.nonNull.string('description');
    t.nonNull.float('latitude');
    t.nonNull.float('longitude');
  },
});
