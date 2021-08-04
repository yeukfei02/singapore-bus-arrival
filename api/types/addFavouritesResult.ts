import { objectType } from 'nexus';

export const AddFavouritesResult = objectType({
  name: 'AddFavouritesResult',
  definition(t) {
    t.nonNull.boolean('status');
  },
});
