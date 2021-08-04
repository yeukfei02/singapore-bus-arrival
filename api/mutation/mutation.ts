import { mutationField, nonNull } from 'nexus';
import { AddFavouritesResult } from '../types/addFavouritesResult';
import { DeleteFavouritesByIdResult } from '../types/deleteFavouritesByIdResult';

import { AddFavourites } from '../input/addFavourites';
import { DeleteFavourites } from '../input/deleteFavourites';

import { addFavouritesControllerFunc, deleteFavouritesByIdControllerFunc } from '../../controller/favourites';

export const addFavourites = mutationField('addFavourites', {
  type: nonNull(AddFavouritesResult),
  args: {
    data: nonNull(AddFavourites),
  },
  resolve: addFavouritesControllerFunc,
});

export const deleteFavouritesById = mutationField('deleteFavouritesById', {
  type: nonNull(DeleteFavouritesByIdResult),
  args: {
    data: nonNull(DeleteFavourites),
  },
  resolve: deleteFavouritesByIdControllerFunc,
});
