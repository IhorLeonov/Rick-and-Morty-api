import { FC } from "react";

interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export interface EpisodeListProps {
  data: Episode[];
}

export const EpisodeList: FC<EpisodeListProps> = ({ data }) => {
  return (
    <>
      {data.map(({ id, name, episode, air_date }) => (
        <div key={id} style={{ display: "flex" }}>
          <p style={{ color: "tomato" }}>{name}</p>
          <p style={{ color: "orange" }}> {episode}</p>
          <p style={{ color: "purple" }}>{air_date}</p>
        </div>
      ))}
    </>
  );
};
