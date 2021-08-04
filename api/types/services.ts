import { nonNull, list, objectType } from 'nexus';
import { NextBus } from './nextBus';

export const Services = objectType({
  name: 'Services',
  definition(t) {
    t.nonNull.string('busNumber');
    t.nonNull.string('operator');
    t.nonNull.field('nextBus', { type: nonNull(list(nonNull(NextBus))) });
  },
});
