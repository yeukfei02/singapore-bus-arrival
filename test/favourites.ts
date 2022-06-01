import { GraphQLClient, gql } from 'graphql-request';

const rootUrl = 'https://73ddoqlmy0.execute-api.ap-southeast-1.amazonaws.com/prod';
const graphQLClient = new GraphQLClient(rootUrl);

export const favouritesTest = (): void => {
  describe('favourites', () => {
    describe('get favourites by installation id', () => {
      let response: any;

      beforeEach(async () => {
        const GET_FAVOURITES_BY_INSTALLATION_ID = gql`
          query getFavouritesByInstallationId($installationId: String!) {
            getFavouritesByInstallationId(installationId: $installationId) {
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
        const variables = { installationId: '57D83666-41E2-4991-B41D-3860CDFAB699' };
        response = await graphQLClient.request(GET_FAVOURITES_BY_INSTALLATION_ID, variables);
      });

      it('return success', () => {
        console.log('response = ', response);

        expect(response).toBeDefined();
        expect(response.getFavouritesByInstallationId).toBeDefined();
      });
    });

    describe('add favourites', () => {
      let response: any;

      beforeEach(async () => {
        const ADD_FAVOURITES = gql`
          mutation addFavourites($data: AddFavourites!) {
            addFavourites(data: $data) {
              status
            }
          }
        `;
        const variables = {
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
        };
        response = await graphQLClient.request(ADD_FAVOURITES, variables);
      });

      it('return success', () => {
        console.log('response = ', response);

        expect(response).toBeDefined();
        expect(response.addFavourites).toBeDefined();
        expect(response.addFavourites.status).toBeDefined();
        expect(response.addFavourites.status).toBe(true);
      });
    });

    describe('delete favourites by id', () => {
      let response: any;

      beforeEach(async () => {
        const favouriteId = await getFavouriteId();

        const DELETE_FAVOURITES_BY_ID = gql`
          mutation deleteFavouritesById($data: DeleteFavourites!) {
            deleteFavouritesById(data: $data) {
              status
            }
          }
        `;
        const variables = {
          data: {
            id: favouriteId,
            installationId: '6b5b76c6-597e-48d0-9bfa-ac4a0557b168',
          },
        };
        response = await graphQLClient.request(DELETE_FAVOURITES_BY_ID, variables);
      });

      it('return success', () => {
        console.log('response = ', response);

        expect(response).toBeDefined();
        expect(response.deleteFavouritesById).toBeDefined();
        expect(response.deleteFavouritesById.status).toBeDefined();
        expect(response.deleteFavouritesById.status).toBe(true);
      });
    });
  });
};

async function getFavouriteId() {
  const GET_FAVOURITES_BY_INSTALLATION_ID = gql`
    query getFavouritesByInstallationId($installationId: String!) {
      getFavouritesByInstallationId(installationId: $installationId) {
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
  const variables = { installationId: '57D83666-41E2-4991-B41D-3860CDFAB699' };
  const response = await graphQLClient.request(GET_FAVOURITES_BY_INSTALLATION_ID, variables);
  console.log('response = ', response);

  const favouriteById = response.getFavouritesByInstallationId[0].id;
  return favouriteById;
}
