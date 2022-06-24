import { AnySoaRecord } from "dns";
import { createContext,Dispatch ,SetStateAction} from "react";

interface MySerchContextInterface {
    serch: string
    setSerch:Dispatch<SetStateAction<never[]>>
  }
interface MyMywordontextInterface {
  
  searchTerm:never[] | Object
  setSearchterm: Dispatch<SetStateAction<string>>
  }


export const MySerchContext = createContext<MySerchContextInterface | null>(null);
export const MyWordContext = createContext<MyMywordontextInterface | null>(null);

