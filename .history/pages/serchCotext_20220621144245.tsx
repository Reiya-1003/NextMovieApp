import { AnySoaRecord } from "dns";
import { createContext,Dispatch ,SetStateAction} from "react";

interface MySerchContextInterface {
    serch: never[] | Object
    setSerch:Dispatch<SetStateAction<never[]>>
  }
interface MyMywordontextInterface {
  
  searchTerm:never[] | Object
  setSearchterm: string;
  }


export const MySerchContext = createContext<MySerchContextInterface | null>(null);
export const MyWordContext = createContext<MyMywordontextInterface | null>(null);

