import { AnySoaRecord } from "dns";
import { createContext } from "react";

export const MySerchContext = createContext<string | null>(null);
export const MyWordContext = createContext<null>(null);

