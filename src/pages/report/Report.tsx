import { FC } from "react";
import { useCharacters } from "../../hooks";
import CharacterTable from "../../containers/CharacterTable";

const Report: FC = () => {
  const { characters, loading } = useCharacters();
  //const searchResults = useContext(SearchContext)  
  if (loading) return <>Cargando Personajes de Rick y Morty</>;
  // Hay que hacer una funcion que se le pasa la data y las columnas que se van a renderizar 

  return (
     <>
     <CharacterTable data={characters}></CharacterTable>
     </>
  );
};

export { Report };