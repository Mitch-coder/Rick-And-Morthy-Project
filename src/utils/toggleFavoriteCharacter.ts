const KEY_FAV = "adsofja;lrjwifjosidmz,sf"

const getFavoriteCharacters = () => {
    const storage = localStorage.getItem(KEY_FAV);

    const array = JSON.parse(storage || "[]");

    if(!array?.length)
        return [array];

    return array;
}

const toogleFavoriteCharacter = (id: number) => {
    const favoriteArray = getFavoriteCharacters() as number[];
    const exist = favoriteArray?.find(x => x === id) ;

    if(!exist) {
        favoriteArray.push(id);
        localStorage.setItem(KEY_FAV, JSON.stringify(favoriteArray));
        return;    
    }
    localStorage.setItem(KEY_FAV, JSON.stringify(favoriteArray.filter(x=> x !== id)));
    return;
}

export { toogleFavoriteCharacter,getFavoriteCharacters};