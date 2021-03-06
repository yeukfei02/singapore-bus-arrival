import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    busArrival(busStopCode: String!): BusArrival!
    busStopByLatLong(latitude: Float!, longitude: Float!, pageNumber: Int!): [BusStopCode!]!
    busStopByRoadName(roadName: String!): [BusStopCode!]!
    busStopByDescription(description: String!): [BusStopCode!]!

    getFavouritesByInstallationId(installationId: String!): [Favourites!]!
  }

  type Mutation {
    addFavourites(data: AddFavourites!): AddFavouritesResult!
    deleteFavouritesById(data: DeleteFavourites!): DeleteFavouritesByIdResult!
  }

  type BusArrival {
    busStopCode: String!
    services: [Services!]!
  }

  type Services {
    busNumber: String!
    operator: String!
    nextBus: [NextBus!]!
  }

  type NextBus {
    estimatedArrival: String!
    latitude: String!
    longitude: String!
    load: String!
    feature: String!
    type: String!
  }

  type BusStopCode {
    busStopCode: String!
    roadName: String!
    description: String!
    latitude: Float!
    longitude: Float!
  }

  type AddFavouritesResult {
    status: Boolean!
  }

  type DeleteFavouritesByIdResult {
    status: Boolean!
  }

  type Favourites {
    id: String!
    installation_id: String!
    item: FavouriteItem!
    createdAt: String!
    updatedAt: String!
  }

  type FavouriteItem {
    bus_stop_code: String!
    description: String!
    latitude: Float!
    longitude: Float!
    road_name: String!
  }

  input AddFavourites {
    installationId: String!
    item: AddFavouriteItem
  }

  input AddFavouriteItem {
    busStopCode: String!
    description: String!
    latitude: Float!
    longitude: Float!
    roadName: String!
  }

  input DeleteFavourites {
    id: String!
    installationId: String!
  }
`;

export default typeDefs;
