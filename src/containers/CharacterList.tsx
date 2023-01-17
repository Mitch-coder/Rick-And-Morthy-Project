import { FC, useContext, useMemo } from "react";
import { SearchContext } from "../context";
import { useCharacters} from "../hooks";
import { getFavoriteCharacters, toogleFavoriteCharacter } from "../utils";
import { CharacterItem } from "./CharacterItem";
import "./CharacterList.css";
import styled from 'styled-components'
import { useTable } from 'react-table'
import CharacterTable from "./CharacterTable";


// const favoritesCharacters = [6,7]

interface Props{
  isFavoritePage:boolean
}

// <Table data={characters}></Table>    

const CharacterList: FC<Props> = ({isFavoritePage})=> {
  const { characters, loading, allCharacters } = useCharacters();
  //const searchResults = useContext(SearchContext)
  const searchContext = useContext(SearchContext);




  if (loading) return <>Cargando Personajes de Rick y Morty</>;
  // Hay que hacer una funcion que se le pasa la data y las columnas que se van a renderizar 

  const favoriteArray = getFavoriteCharacters() as number[]
  console.log(searchContext.query); 
  return (
      isFavoritePage?
  <section>
  <div className="card-container">
    {characters
     .filter(character => character.name.toLowerCase().includes(searchContext.query.toLowerCase()))
     .filter(character => favoriteArray.includes(character.id))
    .map((character) => (
      <CharacterItem
        id={character.id}
        key={`character-${character.id}`} 
        name={character.name} 
        status={character.status}
        species={character.species}
        image={character.image}
        onClick={(id) => {
          toogleFavoriteCharacter(id);
        }}
      />
    ))}
  </div>
</section>:


<section>
<div className="card-container">
  {characters
   .filter(character => character.name.toLowerCase().includes(searchContext.query.toLowerCase()))
  // .filter(character => favoriteArray.includes(character.id))
  .map((character) => (
    <CharacterItem
      id={character.id}
      key={`character-${character.id}`}
      name={character.name}
      status={character.status}
      species={character.species}
      image={character.image}
      onClick={(id) => {
        toogleFavoriteCharacter(id);
      }}
    />
  ))}
</div>
</section>
  );
};

export { CharacterList };


{/* <>{
  isFavoritePage?
  <section>
  <div className="card-container">
    {characters
     .filter(character => character.name.toLowerCase().includes(searchContext.query.toLowerCase()))
     .filter(character => favoriteArray.includes(character.id))
    .map((character) => (
      <CharacterItem
        id={character.id}
        key={`character-${character.id}`}
        name={character.name}
        status={character.status}
        species={character.species}
        image={character.image}
        onClick={(id) => {
          toogleFavoriteCharacter(id);
        }}
      />
    ))}
  </div>
</section>:


<section>
<div className="card-container">
  {characters
   .filter(character => character.name.toLowerCase().includes(searchContext.query.toLowerCase()))
  // .filter(character => favoriteArray.includes(character.id))
  .map((character) => (
    <CharacterItem
      id={character.id}
      key={`character-${character.id}`}
      name={character.name}
      status={character.status}
      species={character.species}
      image={character.image}
      onClick={(id) => {
        toogleFavoriteCharacter(id);
      }}
    />
  ))}
</div>
</section>
}</> */}