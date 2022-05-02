import { objectType } from 'nexus';

export const AllBusService = objectType({
  name: 'AllBusService',
  definition(t) {
    t.nonNull.string('serviceNo');
    t.nonNull.string('operator');
    t.nonNull.int('direction');
    t.nonNull.string('category');
    t.nonNull.string('originCode');
    t.nonNull.string('destinationCode');
    t.nonNull.string('amPeakFreq');
    t.nonNull.string('amOffpeakFreq');
    t.nonNull.string('pmPeakFreq');
    t.nonNull.string('pmOffpeakFreq');
    t.string('loopDesc');
  },
});
