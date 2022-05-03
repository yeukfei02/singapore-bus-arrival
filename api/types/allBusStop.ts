import { objectType } from 'nexus';

export const AllBusStop = objectType({
  name: 'AllBusStop',
  definition(t) {
    t.nonNull.string('busStopCode');
    t.nonNull.string('roadName');
    t.nonNull.string('description');
    t.nonNull.float('latitude');
    t.nonNull.float('longitude');
  },
});
