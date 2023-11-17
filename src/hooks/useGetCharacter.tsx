import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTER = gql`
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

export const useGetCharacter = (id: string | undefined) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  return { data, error, loading };
};
