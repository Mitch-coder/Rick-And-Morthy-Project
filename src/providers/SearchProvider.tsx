import { FC, PropsWithChildren, useState } from "react";
import { SearchContext } from "../context";

export const SearchProvider:FC<PropsWithChildren> = ({ children }) => {
  const [query, setQuery] = useState("")

  return(
    <SearchContext.Provider value={{query: query, searchHandler: setQuery}}>
      {children}
    </SearchContext.Provider>
  )
};