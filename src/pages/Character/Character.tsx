import { useParams } from "react-router";
import { useCharacter } from "../../hooks/useCharacter";

const Character = () => {
  const { id } = useParams();
  console.log(id);

  const { data, loading, error } = useCharacter(id);

  // console.log(error);
  // console.log(loading);
  console.log("Character", data?.character?.image);

  return (
    <div>
      <img src={data?.character?.image} alt="Character picture" />
      <div>
        <p>{data?.character?.name}</p>
        <p>
          {/* <Indicator /> */}
          <span>{data?.character?.status}</span>&nbsp;-&nbsp;<span>{data?.character?.species}</span>
        </p>
        <p style={{ fontSize: 15 }}>Last known location:</p>
        <p>{data?.character?.location.name}</p>
        <p>First seen in:</p>
        <p>{data?.character?.episode[0].name}</p>
      </div>
    </div>
  );
};

export default Character;
