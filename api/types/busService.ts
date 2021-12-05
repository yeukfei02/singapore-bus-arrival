import { objectType } from 'nexus';
import { BusStopCode } from './busStopCode';

export const BusService = objectType({
  name: 'BusService',
  definition(t) {
    t.nonNull.string('serviceNo');
    t.nonNull.string('operator');
    t.nonNull.int('direction');
    t.nonNull.string('category');
    t.nonNull.string('originCode');
    t.nonNull.field('originBusStop', { type: BusStopCode });
    t.nonNull.string('destinationCode');
    t.nonNull.field('destinationBusStop', { type: BusStopCode });
    t.nonNull.string('amPeakFreq');
    t.nonNull.string('amOffpeakFreq');
    t.nonNull.string('pmPeakFreq');
    t.nonNull.string('pmOffpeakFreq');
    t.string('loopDesc');
  },
});
