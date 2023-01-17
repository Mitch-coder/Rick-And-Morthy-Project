import { useCharacters } from "../hooks/useCharacters";
import Table from "./CharacterTable";

const CharacterReport = () => {
    const { characters, loading, allCharacters } = useCharacters();
    //const searchResults = useContext(SearchContext)  
    if (loading) return <>Cargando Personajes de Rick y Morty</>;
    // Hay que hacer una funcion que se le pasa la data y las columnas que se van a renderizar 
  
    return (
       <>
       <Table data={characters}></Table>    
       </>
    );
  };
  
  export { CharacterReport };