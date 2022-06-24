import { AnySoaRecord } from "dns";
import { createContext,Dispatch ,SetStateAction} from "react";




export const MySerchContext = createContext({} as {
  serch:{
          total_pages:number,
          results:undefined | never[],
          total_results:number,
          page:number
        }
  setSerch:Dispatch<SetStateAction<{ total_pages: number; results: undefined; total_results: number; page: number; }>>
})
  


export const MyWordContext = createContext({} as {
  searchTerm:string
  setSearchterm:Dispatch<SetStateAction<string>>
})

