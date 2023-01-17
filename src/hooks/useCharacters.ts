import { getCharacters } from "../services/character.service";
import { useEffect, useState } from "react";
import { ICharacter } from "../models/character";

const useCharacters = () =>{
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [allCharacters, setAllCharacters] = useState<ICharacter[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getData = async () => {
            const characters = await getCharacters();
            setCharacters(characters)
            setAllCharacters(allCharacters)
            setLoading(false);
        };

        getData();
    },[]);
    
    return { characters, allCharacters , loading };
}

export { useCharacters };
