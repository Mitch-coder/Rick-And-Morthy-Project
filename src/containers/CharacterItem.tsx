import { FC } from "react";
import Card from "react-bootstrap/Card";
import { characterStatus } from "../models";
import "./CharacterItem.css";

type Props = {
  name: string;
  species: string;
  status: characterStatus;
  image: string;
  onClick: (id: number) => void;
  id: number;
};

const CharacterItem: FC<Props> = ({ image, name, species, status, onClick, id }) => {
  return (
    <Card style={{ width: "18rem" }} className="bg-dark text-white" onClick={() => onClick(id)}>
      <Card.Img variant="top" src={image} className="img-container" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {species}
          <br />
          {status}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export { CharacterItem };
