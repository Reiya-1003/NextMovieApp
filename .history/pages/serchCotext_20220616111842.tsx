import { AnySoaRecord } from "dns";
import { createContext } from "react";

interface MySerchContextInterface {
    name: string;
    age: number;
  }

export const MySerchContext = createContext<string | null>(null);
export const MyWordContext = createContext<null>(null);

