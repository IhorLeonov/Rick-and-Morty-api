import { useParams } from "react-router";
import { useCharacter } from "../../hooks/useCharacter";
import {
  CardItem,
  Image,
  Wrapper,
  Name,
  Status,
  Indicator,
  Label,
  Caption,
} from "../../components/CharacterItem/CharacterItem.styled";

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something wrong</p>;
  if (data) console.log(data);

  if (data && !loading) {
    const { name, image, status, species, location, episode } = data.character;
    return (
      <CardItem style={{ paddingTop: 56 }}>
        <Image style={{ width: 595, height: 572 }} src={image} alt="Character picture" />
        <Wrapper style={{ width: "100%", paddingLeft: 42, paddingRight: 42 }}>
          <Name>{name}</Name>
          <Status>
            <Indicator />
            {status} - {species}
          </Status>
          <Label style={{ fontSize: 15 }}>Last known location:</Label>
          <Caption>{location.name}</Caption>
          <Label>First seen in:</Label>
          <Caption>{episode[0].name}</Caption>
          <Label style={{ paddingTop: 33 }}>Other Info:</Label>
          <Caption>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quibusdam similique,
            corporis sed in nam aliquid nostrum fugit, expedita tempore dolorum animi ratione!
            <br />
            <br />
            Similique eligendi nulla ratione totam accusamus commodi sit, dicta ullam fugit illo,
            architecto ut expedita iure vel eveniet reiciendis atque molestiae obcaecati, placeat
            esse dolorem doloribus earum.
          </Caption>
        </Wrapper>
      </CardItem>
    );
  }
};

export default Character;
