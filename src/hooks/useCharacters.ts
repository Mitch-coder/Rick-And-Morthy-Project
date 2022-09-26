import { getCharacters } from "../services/character.service";
import { useEffect, useState } from "react";
import { character } from "../models/character";

const useCharacters = () =>{
    const [characters, setCharacters] = useState<character[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getData = async () => {
            const characters = await getCharacters();
            setCharacters(characters)
            setLoading(false);
        };

        getData();
    },[]);
    
    return { characters, loading };
}

export { useCharacters };
