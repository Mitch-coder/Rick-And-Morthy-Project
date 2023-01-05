import { FC, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { characterStatus } from "../models";
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";
import "./CharacterItem.css";
import { Button } from "react-bootstrap";

type Props = {
  name: string;
  species: string;
  status: characterStatus;
  image: string;
  onClick: (id: number) => void;
  id: number;
};

const CharacterItem: FC<Props> = ({ image, name, species, status, onClick, id }) => {

  const key = `like-${id}`
  const [liked,setLiked]=useState(()=>{
    try {
      const like = localStorage.getItem(key)
      return like
    } catch (error) {
      return false
    }
  })

  const Icon = liked ? MdFavorite:MdFavoriteBorder;
  const onHandleClick = () =>{
    setLocalStorage(!liked)
    onClick(id)
  }  
  const setLocalStorage = (value:boolean)=>{
    try {
      localStorage.setItem(key,JSON.stringify(value))
      setLiked(value)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Card style={{ width: "18rem" }} className="bg-dark text-white" >
      <Card.Img variant="top" src={image} className="img-container" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {species}
          <br />
          {status}
          <br />
        </Card.Text>
        <Button variant="btn btn-dark" size="sm" id="btn-like" onClick={onHandleClick}>
          <Icon size={'32px'}></Icon>
        </Button>
      </Card.Body>
    </Card>
  );
};

export { CharacterItem };
