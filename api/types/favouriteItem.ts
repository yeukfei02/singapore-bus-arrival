import { objectType } from 'nexus';

export const FavouriteItem = objectType({
  name: 'FavouriteItem',
  definition(t) {
    t.nonNull.string('bus_stop_code');
    t.nonNull.string('description');
    t.nonNull.float('latitude');
    t.nonNull.float('longitude');
    t.nonNull.string('road_name');
  },
});
