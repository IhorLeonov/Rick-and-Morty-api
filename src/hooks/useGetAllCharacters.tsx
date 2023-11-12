import { gql, useQuery } from "@apollo/client";

const GET_All_CHARACTERS = gql`
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
  const { data, error, loading, fetchMore } = useQuery(GET_All_CHARACTERS, {
    variables: { page, pageSize: 10 },
  });

  return { data, error, loading, fetchMore };
};
