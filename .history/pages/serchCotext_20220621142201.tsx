import { AnySoaRecord } from "dns";
import { createContext } from "react";

interface MySerchContextInterface {
    serch: string;
    age: number;
  }
interface MyMywordontextInterface {
  
  searchTerm:string;
  setSearchterm: string;
  }


export const MySerchContext = createContext<MySerchContextInterface | null>(null);
export const MyWordContext = createContext<MyMywordontextInterface | null>(null);

