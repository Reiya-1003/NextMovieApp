import { AnySoaRecord } from "dns";
import { createContext } from "react";

interface MySerchContextInterface {
    serch: string | number;
    setSerch:void
  }
interface MyMywordontextInterface {
  
  searchTerm:string;
  setSearchterm: string;
  }


export const MySerchContext = createContext<MySerchContextInterface | null>(null);
export const MyWordContext = createContext<MyMywordontextInterface | null>(null);
