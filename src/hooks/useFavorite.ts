const KEY_FAV = "adsofja;lrjwifjosidmz,sf"

//Aqui puedo hacer la peticion del solo caracter
const useFavorite = () => 
{
    const toogleFavoriteCharacter = (id: number) => {
        let favoriteArray: number[] = [];
        const storage = localStorage.getItem(KEY_FAV);

        if(storage)
            favoriteArray = JSON.parse(storage);

        const exist = favoriteArray.find(x => x === id) != null;

        if(exist)
            favoriteArray.filter(x => x !== id);
        else
            favoriteArray.push(id);

        localStorage.setItem(KEY_FAV, JSON.stringify(favoriteArray));
    }
}

export default useFavorite;