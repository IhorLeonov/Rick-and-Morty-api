import { gql, useLazyQuery } from "@apollo/client";

export const GET_EPISODE = gql`
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

export const useGetEpisode = (page: number, name: string, episodeCode: string) => {
  const [getEpisode, { loading, error, data, called }] = useLazyQuery(GET_EPISODE, {
    variables: {
      name,
      page,
      episode: episodeCode,
    },
  });

  const episode = { getEpisode, data, error, loading, called };

  return episode;
};
