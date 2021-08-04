import { objectType } from 'nexus';

export const NextBus = objectType({
  name: 'NextBus',
  definition(t) {
    t.nonNull.string('estimatedArrival');
    t.nonNull.string('latitude');
    t.nonNull.string('longitude');
    t.nonNull.string('load');
    t.nonNull.string('feature');
    t.nonNull.string('type');
  },
});
