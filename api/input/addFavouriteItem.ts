import { inputObjectType } from 'nexus';

export const AddFavouriteItem = inputObjectType({
  name: 'AddFavouriteItem',
  definition(t) {
    t.nonNull.string('busStopCode');
    t.nonNull.string('description');
    t.nonNull.float('latitude');
    t.nonNull.float('longitude');
    t.nonNull.string('roadName');
  },
});
