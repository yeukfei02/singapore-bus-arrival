import { nonNull, objectType } from 'nexus';
import { FavouriteItem } from './favouriteItem';

export const Favourites = objectType({
  name: 'Favourites',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('installation_id');
    t.nonNull.field('item', { type: nonNull(FavouriteItem) });
    t.nonNull.string('createdAt');
    t.nonNull.string('updatedAt');
  },
});
