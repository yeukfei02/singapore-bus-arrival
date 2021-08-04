import { nonNull, list, objectType } from 'nexus';
import { Services } from './services';

export const BusArrival = objectType({
  name: 'BusArrival',
  definition(t) {
    t.nonNull.string('busStopCode');
    t.nonNull.field('services', { type: nonNull(list(nonNull(Services))) });
  },
});
