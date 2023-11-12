import { gql, useLazyQuery } from "@apollo/client";

const GET_LOCATION = gql`
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

export const useGetLocation = (page: number, name: string, type: string, dimension: string) => {
  const [getLocation, { loading, error, data, called }] = useLazyQuery(GET_LOCATION, {
    variables: {
      name,
      page,
      type,
      dimension,
    },
  });

  const location = { getLocation, data, error, loading, called };

  return location;
};
