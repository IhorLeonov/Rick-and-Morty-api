import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import {
  Image,
  Wrapper,
  Name,
  Status,
  Indicator,
  Label,
  Caption,
} from "../../components/CharacterItem/CharacterItem.styled";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getCharacter } from "../../redux/operations";
import { selectCharacterData, selectIsLoading } from "../../redux/selectors";
import { checkStatus } from "../../helpers/helpers";
import { BackLink } from "../../components/BackBtn/BackBtn";
import { FAB } from "../../components/Fab/Fab";

const Character = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    if (id) dispatch(getCharacter(id));
  }, [id, dispatch]);

  useEffect(() => {
    window.scroll({
      top: 400,
    });
  }, []);

  const characterData = useAppSelector(selectCharacterData);

  if (characterData !== null && !isLoading) {
    const { name, image, status, species, location, episode } = characterData;
    return (
      <section style={{ position: "relative" }}>
        <BackLink to={backLinkHref} />
        <div style={{ display: "flex", paddingTop: 20 }}>
          <Image style={{ width: 595, height: 572 }} src={image} alt="Character picture" />
          <Wrapper style={{ width: "100%", height: 572, paddingLeft: 42, paddingRight: 42 }}>
            <Name>{name}</Name>
            <Status>
              <Indicator style={{ backgroundColor: checkStatus(status) }} />
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
        </div>
        <FAB styles={{ bottom: -28 }} disabled={true} />
      </section>
    );
  }
};

export default Character;
