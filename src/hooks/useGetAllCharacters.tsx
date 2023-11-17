import { gql, useQuery } from "@apollo/client";

export const GET_All_CHARACTERS = gql`
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

export const useAllCharacters = (page: number) => {
  const { data, error, loading } = useQuery(GET_All_CHARACTERS, {
    variables: { page },
  });

  const allCharacters = { data, error, loading };
  return allCharacters;
};
