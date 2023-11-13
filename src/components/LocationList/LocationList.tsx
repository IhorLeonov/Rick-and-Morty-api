import { FC } from "react";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export interface LocationListProps {
  data: Location[];
}

export const LocationList: FC<LocationListProps> = ({ data }) => {
  return (
    <>
      {data.map(({ id, name, type, dimension }) => (
        <div key={id} style={{ display: "flex" }}>
          <p style={{ color: "yellowgreen" }}> {name}</p>
          <p style={{ color: "blue" }}>{type}</p>
          <p style={{ color: "violet" }}>{dimension}</p>
        </div>
      ))}
    </>
  );
};
