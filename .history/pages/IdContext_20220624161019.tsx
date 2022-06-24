import { createContext,Dispatch ,SetStateAction} from "react";

export const MyIdContext = createContext({} as {
    movieid:number
    setMovieid:Dispatch<SetStateAction<number>>
  })
