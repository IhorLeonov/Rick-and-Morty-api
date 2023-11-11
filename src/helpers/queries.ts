import { gql } from "@apollo/client";

const GET_All_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
        episode {
          name
        }
      }
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

const GET_EPISODES = gql`
  {
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

export { GET_All_CHARACTERS, GET_EPISODES };
