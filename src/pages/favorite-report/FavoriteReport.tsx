import CharacterTable from "../../containers/CharacterTable";
import { useCharacters } from "../../hooks";
import { getFavoriteCharacters } from "../../utils";

const FavoriteReport = () => {
  const { characters, loading } = useCharacters();
  //const searchResults = useContext(SearchContext)  
  if (loading) return <>Cargando Personajes de Rick y Morty</>;
  // Hay que hacer una funcion que se le pasa la data y las columnas que se van a renderizar 

  const favoriteCharacters = getFavoriteCharacters() as number[];

  const data = characters
    // .filter(character => character.name.toLowerCase().includes(searchContext.query.toLowerCase()))
    .filter(character => favoriteCharacters.includes(character.id))

  return (
     <CharacterTable data={data}></CharacterTable>
     
  );
}
export default FavoriteReport