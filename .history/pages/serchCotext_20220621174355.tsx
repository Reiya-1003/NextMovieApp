import { AnySoaRecord } from "dns";
import { createContext,Dispatch ,SetStateAction} from "react";

interface MySerchContextInterface {
    serch:{
      total_pages:Number,
      results:[],
      total_results:Number,
      page:Number
    }
    setSerch:Dispatch<SetStateAction<number[]>>
  }
interface MyMywordontextInterface {
  
  searchTerm:never[] | Object
  setSearchterm: Dispatch<SetStateAction<string>>
  }


export const MySerchContext = createContext(
	{} as MySerchContextInterface )
export const MyWordContext = createContext<MyMywordontextInterface | null>(null);

