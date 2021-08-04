import { objectType } from 'nexus';

export const DeleteFavouritesByIdResult = objectType({
  name: 'DeleteFavouritesByIdResult',
  definition(t) {
    t.nonNull.boolean('status');
  },
});
