import { useEffect, useState } from "react";
import axios from "axios";


type character = {
    key:number,
    name:string,
    status:string,
    species:string,
    image:string
}

const useGetCharacters = (api:string) =>{
    const [characters, setCharacters] = useState<character[]>([])

    useEffect(()=>{
        const getCharacters = async () =>{
            const response = await axios(api)
            console.log(response.data)
            setCharacters(response.data.results)
        }
        getCharacters()
    },[])
    return characters
}

export { useGetCharacters };
export type { character };
