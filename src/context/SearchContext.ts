import{ createContext, useContext } from "react";

interface searchBar {
    query: string,
    searchHandler: (query:string) => void ,
}

export const SearchContext = createContext<searchBar>({
    query:"",
    searchHandler: () => {}
})

export const useSearchContext = () => useContext(SearchContext);