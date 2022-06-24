import { createContext } from "react";

export const MyIdContext = createContext({} as {
    searchTerm:string
    setSearchterm:Dispatch<SetStateAction<string>>
  })
