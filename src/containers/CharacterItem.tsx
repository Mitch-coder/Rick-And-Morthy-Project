import React, { FC } from "react";
import { character } from "../hooks";
import Card from 'react-bootstrap/Card';
import "./CharacterItem.css"

const CharacterItem = ({key,name,species,status,image}:character) =>{
    return(
      <>
        <Card style={{ width: '18rem' }}  className="bg-dark text-white">
      <Card.Img variant="top" src={image} className="img-container"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {species}<br/>
          {status}<br/>
        </Card.Text>
      </Card.Body>
        </Card>
      </>
      
    )
}

export {CharacterItem}