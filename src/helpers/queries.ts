const GET_ALL_CHARACTERS = `
  query GetAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
      }
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
  }
`;

const GET_CHARACTER = `
  query GetCharacter($id: ID!) {
    character(id: $id) {
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
`;

const GET_FILTERED_CHARS = `
  query GetFilteredInfo(
    $page: Int
    $name: String!
    $status: String!
    $type: String!
    $species: String!
    $gender: String!
  ) {
    characters(
      page: $page
      filter: { name: $name, status: $status, type: $type, species: $species, gender: $gender }
    ) {
      info {
        count
        pages
      }
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
  }
`;

const GET_LOCATIONS = `
  query GetLocation($page: Int, $name: String!, $type: String!, $dimension: String!) {
    locations(page: $page, filter: { name: $name, type: $type, dimension: $dimension }) {
      info {
        count
        pages
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

const GET_EPISODES = `
  query GetEpisode($page: Int, $name: String!, $episode: String!) {
    episodes(page: $page, filter: { name: $name, episode: $episode }) {
      info {
        count
        pages
      }
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`;

export { GET_ALL_CHARACTERS, GET_CHARACTER, GET_FILTERED_CHARS, GET_LOCATIONS, GET_EPISODES };
