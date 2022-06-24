import { createContext } from "react";

export const MyIdContext = createContext({} as {
    movieid:string
    setMovieid:Dispatch<SetStateAction<string>>
  })
