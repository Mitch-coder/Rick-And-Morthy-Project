import { character, useGetCharacters } from "../hooks";
import { CharacterItem } from "./CharacterItem";
import './CharacterList.css' 

const API:string ='https://rickandmortyapi.com/api/character'


const CharacterList = () =>{
    const data = useGetCharacters(API)
    return(
        <section >
            <div className="card-container">
                {data?.map(character =>(
                 <CharacterItem 
                        key={character.key}
                        name={character.name}
                        status={character.status}
                        species={character.species} 
                        image={character.image}
                />
                ))}
            </div>
        </section>
    )
}

export {CharacterList}

