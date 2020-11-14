import { ApolloServer } from 'apollo-server';
import typeDefs from '../schema/typeDefs';
import resolvers from '../resolvers/resolvers';

import { createTestClient } from 'apollo-server-testing';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { query, mutate } = createTestClient(server);

export const favouritesTest = (): void => {
  describe('favourites test', () => {
    test('get favourites by installation id test', async () => {
      const GET_FAVOURITES_BY_INSTALLATION_ID = `
        query getFavouritesByInstallationId ($installationId: String!) {
            getFavouritesByInstallationId (installationId: $installationId) {
                id
                installation_id
                item {
                    bus_stop_code
                    description
                    latitude
                    longitude
                    road_name
                }
                createdAt
                updatedAt
            }
        }
      `;
      const response = await query({
        query: GET_FAVOURITES_BY_INSTALLATION_ID,
        variables: { installationId: '57D83666-41E2-4991-B41D-3860CDFAB699' },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.getFavouritesByInstallationId).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('add favourites test', async () => {
      const ADD_FAVOURITES = `
            mutation addFavourites ($data: AddFavourites!) {
                addFavourites (data: $data) {
                    status
                }
            }
        `;
      const response = await mutate({
        mutation: ADD_FAVOURITES,
        variables: {
          data: {
            installationId: '57D83666-41E2-4991-B41D-3860CDFAB699',
            item: {
              busStopCode: '64189',
              description: 'Aft Old Tampines Rd',
              latitude: 1.37693109577247,
              longitude: 103.91392221641736,
              roadName: 'Tampines Rd',
            },
          },
        },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.addFavourites).toBeDefined();
      expect(response.data.addFavourites.status).toBeDefined();
      expect(response.data.addFavourites.status).toBe(true);
      expect(response.errors).toBeUndefined();
    });

    test('delete favourites by id test', async () => {
      const DELETE_FAVOURITES_BY_ID = `
        mutation deleteFavouritesById ($data: DeleteFavourites!) {
            deleteFavouritesById (data: $data) {
                status
            }
        }
          `;
      const response = await mutate({
        mutation: DELETE_FAVOURITES_BY_ID,
        variables: {
          data: {
            id: '7b9e8fb2-29b6-41b6-90f0-6ed8b26f79eb',
            installationId: '6b5b76c6-597e-48d0-9bfa-ac4a0557b168',
          },
        },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.deleteFavouritesById).toBeDefined();
      expect(response.data.deleteFavouritesById.status).toBeDefined();
      expect(response.data.deleteFavouritesById.status).toBe(true);
      expect(response.errors).toBeUndefined();
    });
  });
};
