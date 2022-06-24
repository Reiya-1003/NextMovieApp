import { AnySoaRecord } from "dns";
import { createContext,Dispatch ,SetStateAction} from "react";


interface MyMywordontextInterface {
  
  searchTerm:never[] | Object
  setSearchterm: Dispatch<SetStateAction<string>>
  }


export const MySerchContext = createContext({} as {
  serch:{
          total_pages:number,
          results:never[],
          total_results:number,
          page:number
        }
  setSerch:Dispatch<SetStateAction<{ total_pages: number; results: never[]; total_results: number; page: number; }>>
})
  


export const MyWordContext = createContext({} as {
  searchTerm:string
  setSearchterm:Dispatch<SetStateAction<string>>
})

