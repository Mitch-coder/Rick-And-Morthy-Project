import { useCharacters, useField } from "../hooks";
import { getCharacter } from "../services/character.service";
import { CharacterItem } from "./CharacterItem";
import "./CharacterList.css";

// const favoritesCharacters = [6,7]

const CharacterList = () => {
  const { characters, loading } = useCharacters();
  const searchInput = useField();

  if (loading) return <>Cargando Personajes de Rick y Morty</>;

  return (
    <section>
      {<input  {...searchInput}/>}
      <div className="card-container">
        {characters
         .filter(character => character.name.toLowerCase().includes(searchInput.value.toLowerCase()))
        // .filter(character => character.id.includes(character.id))
        .map((character) => (
          <CharacterItem
            id={character.id}
            key={`character-${character.id}`}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            onClick={async (id) => {
              const character = await getCharacter(id);
              console.log(character);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export { CharacterList };
