import { ChangeEvent, FC, useContext } from "react";
import { SearchContext } from "../context";
import { useCharacters, useField } from "../hooks";
import { getCharacter } from "../services/character.service";
import { getFavoriteCharacters, toogleFavoriteCharacter } from "../utils";
import { CharacterItem } from "./CharacterItem";
import "./CharacterList.css";

// const favoritesCharacters = [6,7]

interface Props{
  isFavoritePage:boolean
}


const CharacterList: FC<Props> = ({isFavoritePage})=> {
  const { characters, loading, allCharacters } = useCharacters();
  //const searchResults = useContext(SearchContext)
  const searchContext = useContext(SearchContext);

  if (loading) return <>Cargando Personajes de Rick y Morty</>;

  const favoriteArray = getFavoriteCharacters() as number[]
  
  console.log(searchContext.query); 
  return (
<>{
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
}</>
   
  );
};

export { CharacterList };
