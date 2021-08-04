import { inputObjectType } from 'nexus';

export const DeleteFavourites = inputObjectType({
  name: 'DeleteFavourites',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('installationId');
  },
});
