import { AnySoaRecord } from "dns";
import { createContext,Dispatch ,SetStateAction} from "react";

interface MySerchContextInterface {
    serch: string | number;
    setSerch:Dispatch<SetStateAction<never[]>>
  }
interface MyMywordontextInterface {
  
  searchTerm:string;
  setSearchterm: string;
  }


export const MySerchContext = createContext<MySerchContextInterface | null>(null);
export const MyWordContext = createContext<MyMywordontextInterface | null>(null);

