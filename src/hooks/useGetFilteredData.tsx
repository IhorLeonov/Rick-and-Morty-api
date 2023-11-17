import { gql, useLazyQuery } from "@apollo/client";

export const GET_FILTERED_INFO = gql`
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

export const useGetFilteredData = (
  page: number,
  name: string,
  status: string,
  type: string,
  species: string,
  gender: string
) => {
  const [getFilterdData, { loading, error, data, called }] = useLazyQuery(GET_FILTERED_INFO, {
    variables: {
      name,
      page,
      status,
      type,
      species,
      gender,
    },
  });

  const filtredCharacters = { getFilterdData, data, error, loading, called };

  return filtredCharacters;
};
