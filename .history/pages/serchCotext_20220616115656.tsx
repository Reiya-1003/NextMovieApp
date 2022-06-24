import { AnySoaRecord } from "dns";
import { createContext } from "react";

interface MySerchContextInterface {
    name: string;
    age: number;
  }
interface MyMywordontextInterface {
  searchTerm:string;
  setSearchterm: Dispatch<SetStateAction<string>>;
  }


export const MySerchContext = createContext<MySerchContextInterface | null>(null);
export const MyWordContext = createContext<MyMywordontextInterface | null>(null);

