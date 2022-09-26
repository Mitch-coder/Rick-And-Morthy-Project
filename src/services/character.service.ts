import axios from "axios";
import { character } from "../models/character";

const API = 'https://rickandmortyapi.com/api'

export const getCharacters = async () => {
    const { data } = await axios.get(`${API}/character`);
    const { results } = data;
    return results as character[];
}

export const getCharacter = async (id: number)  => {
    const { data } = await axios.get(`${API}/character/${id}`); 
    return data as character;
}