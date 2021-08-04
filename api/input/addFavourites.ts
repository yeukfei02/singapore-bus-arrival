import { inputObjectType } from 'nexus';
import { AddFavouriteItem } from './addFavouriteItem';

export const AddFavourites = inputObjectType({
  name: 'AddFavourites',
  definition(t) {
    t.nonNull.string('installationId');
    t.field('item', { type: AddFavouriteItem });
  },
});
