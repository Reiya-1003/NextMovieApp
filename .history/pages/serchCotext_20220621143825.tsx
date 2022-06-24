import { AnySoaRecord } from "dns";
import { createContext, Dispatch } from "react";

interface MySerchContextInterface {
    serch: string | number;
    setSerch:Dispatch
  }
interface MyMywordontextInterface {
  
  searchTerm:string;
  setSearchterm: string;
  }


export const MySerchContext = createContext<MySerchContextInterface | null>(null);
export const MyWordContext = createContext<MyMywordontextInterface | null>(null);

